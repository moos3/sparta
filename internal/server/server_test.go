// internal/server/server_test.go
package server

import (
	"context"
	// "database/sql"
	"fmt"
	"google.golang.org/grpc"
	"testing"
	"time"

	"github.com/moos3/sparta/internal/db"
	pb "github.com/moos3/sparta/proto"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
	// "github.com/moos3/sparta/internal/testutils"
)

type MockDNSScanPlugin struct {
	mock.Mock
}

func (m *MockDNSScanPlugin) Initialize() error {
	args := m.Called()
	return args.Error(0)
}

func (m *MockDNSScanPlugin) Name() string {
	args := m.Called()
	return args.String(0)
}

func (m *MockDNSScanPlugin) SetDatabase(db db.Database) {
	m.Called(db)
}

func (m *MockDNSScanPlugin) ScanDomain(domain string) (db.DNSSecurityResult, error) {
	args := m.Called(domain)
	return args.Get(0).(db.DNSSecurityResult), args.Error(1)
}

func (m *MockDNSScanPlugin) InsertDNSScanResult(domain string, result db.DNSSecurityResult) (string, error) {
	args := m.Called(domain, result)
	return args.String(0), args.Error(1)
}

func (m *MockDNSScanPlugin) GetDNSScanResultsByDomain(domain string) ([]struct {
	ID        string
	Domain    string
	Result    db.DNSSecurityResult
	CreatedAt time.Time
}, error) {
	args := m.Called(domain)
	return args.Get(0).([]struct {
		ID        string
		Domain    string
		Result    db.DNSSecurityResult
		CreatedAt time.Time
	}), args.Error(1)
}

func TestAuthInterceptor(t *testing.T) {
	ctx := context.Background()
	s := &Server{}
	req := struct{}{}
	info := &grpc.UnaryServerInfo{}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return req, nil
	}

	t.Run("MissingMetadata", func(t *testing.T) {
		_, err := s.AuthInterceptor(ctx, req, info, handler)
		assert.Error(t, err)
		st, ok := status.FromError(err)
		assert.True(t, ok)
		assert.Equal(t, codes.Unavailable, st.Code())
	})

	t.Run("MissingAPIKey", func(t *testing.T) {
		ctx = metadata.NewIncomingContext(ctx, metadata.Pairs())
		_, err := s.AuthInterceptor(ctx, req, info, handler)
		assert.Error(t, err)
		st, ok := status.FromError(err)
		assert.True(t, ok)
		assert.Equal(t, codes.Unavailable, st.Code())
	})

	t.Run("ValidAPIKey", func(t *testing.T) {
		ctx = metadata.NewIncomingContext(ctx, metadata.Pairs("x-api-key", "test-key"))
		resp, err := s.AuthInterceptor(ctx, req, info, handler)
		assert.NoError(t, err)
		assert.Equal(t, req, resp)
		apiKey, ok := ctx.Value(string("api_key")).(string)
		assert.True(t, ok)
		assert.Equal(t, "test-key", apiKey)
	})
}

func TestScanDomain(t *testing.T) {
	ctx := context.Background()

	t.Run("PluginNotLoaded", func(t *testing.T) {
		s := &Server{}
		_, err := s.ScanDomain(ctx, &pb.ScanDomainRequest{Domain: "example.com"})
		assert.Error(t, err)
		st, ok := status.FromError(err)
		assert.True(t, ok)
		assert.Equal(t, codes.Unavailable, st.Code())
	})

	t.Run("InvalidDomain", func(t *testing.T) {
		mockPlugin := &MockDNSScanPlugin{}
		s := &Server{DnsPlugin: mockPlugin}
		_, err := s.ScanDomain(ctx, &pb.ScanDomainRequest{Domain: ""})
		assert.Error(t, err)
		st, ok := status.FromError(err)
		assert.True(t, ok)
		assert.Equal(t, codes.InvalidArgument, st.Code())
	})

	t.Run("Success", func(t *testing.T) {
		mockPlugin := &MockDNSScanPlugin{}
		s := &Server{DnsPlugin: mockPlugin}
		result := db.DNSSecurityResult{SPFRecord: "v=spf1 include:_spf.google.com ~all"}
		mockPlugin.On("ScanDomain", "example.com").Return(result, nil).Once()
		mockPlugin.On("InsertDNSScanResult", "example.com", result).Return("scan-123", nil).Once()

		resp, err := s.ScanDomain(ctx, &pb.ScanDomainRequest{Domain: "example.com"})
		if !assert.NoError(t, err) {
			t.Logf("ScanDomain failed: %v", err)
			return
		}
		if !assert.NotNil(t, resp) {
			t.Log("Response is nil")
			return
		}
		assert.Equal(t, "scan-123", resp.ScanId)
		assert.Equal(t, "v=spf1 include:_spf.google.com ~all", resp.Result.SpfRecord)
		mockPlugin.AssertExpectations(t)
	})

	t.Run("ScanError", func(t *testing.T) {
		mockPlugin := &MockDNSScanPlugin{}
		s := &Server{DnsPlugin: mockPlugin}
		mockPlugin.On("ScanDomain", "example.com").Return(db.DNSSecurityResult{}, fmt.Errorf("scan error")).Once()

		_, err := s.ScanDomain(ctx, &pb.ScanDomainRequest{Domain: "example.com"})
		assert.Error(t, err)
		st, ok := status.FromError(err)
		assert.True(t, ok)
		assert.Equal(t, codes.Internal, st.Code())
		mockPlugin.AssertExpectations(t)
	})
}
