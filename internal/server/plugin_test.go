// internal/server/plugin_test.go
package server

import (
	"context"
	"fmt"
	"testing"
	"time"

	pb "github.com/moos3/sparta/proto"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	//"github.com/moos3/sparta/internal/config"
	"github.com/moos3/sparta/internal/db"
	"github.com/moos3/sparta/internal/testutils"
)

type MockTLSScanPlugin struct {
	mock.Mock
}

func (m *MockTLSScanPlugin) Initialize() error {
	args := m.Called()
	return args.Error(0)
}

func (m *MockTLSScanPlugin) Name() string {
	args := m.Called()
	return args.String(0)
}

func (m *MockTLSScanPlugin) SetDatabase(db db.Database) {
	m.Called(db)
}

func (m *MockTLSScanPlugin) ScanTLS(domain string, dnsScanID string) (db.TLSSecurityResult, error) {
	args := m.Called(domain, dnsScanID)
	return args.Get(0).(db.TLSSecurityResult), args.Error(1)
}

func (m *MockTLSScanPlugin) InsertTLSScanResult(domain string, dnsScanID string, result db.TLSSecurityResult) (string, error) {
	args := m.Called(domain, dnsScanID, result)
	return args.String(0), args.Error(1)
}

func (m *MockTLSScanPlugin) GetTLSScanResultsByDomain(domain string) ([]struct {
	ID        string
	Domain    string
	DNSScanID string
	Result    db.TLSSecurityResult
	CreatedAt time.Time
}, error) {
	args := m.Called(domain)
	return args.Get(0).([]struct {
		ID        string
		Domain    string
		DNSScanID string
		Result    db.TLSSecurityResult
		CreatedAt time.Time
	}), args.Error(1)
}

// Other mock plugins (MockCrtShScanPlugin, etc.) omitted for brevity

func TestScanTLS(t *testing.T) {
	ctx := context.Background()

	t.Run("PluginNotLoaded", func(t *testing.T) {
		s := &Server{}
		_, err := s.ScanTLS(ctx, &pb.ScanTLSRequest{Domain: "example.com", DnsScanId: "scan-123"})
		assert.Error(t, err)
		st, ok := status.FromError(err)
		assert.True(t, ok)
		assert.Equal(t, codes.Unavailable, st.Code())
	})

	t.Run("InvalidDomain", func(t *testing.T) {
		s := &Server{TlsPlugin: &MockTLSScanPlugin{}}
		_, err := s.ScanTLS(ctx, &pb.ScanTLSRequest{Domain: "", DnsScanId: "scan-123"})
		assert.Error(t, err)
		st, ok := status.FromError(err)
		assert.True(t, ok)
		assert.Equal(t, codes.InvalidArgument, st.Code())
	})

	t.Run("InvalidDnsScanID", func(t *testing.T) {
		mockDb := testutils.NewMockDatabase()
		mockPlugin := &MockTLSScanPlugin{}
		mockRow := &testutils.MockRow{}
		s := &Server{Db: mockDb, TlsPlugin: mockPlugin}
		query := "SELECT EXISTS (SELECT 1 FROM dns_scan_results WHERE id = $1)"
		mockDb.On("QueryRow", query, "scan-123").Return(mockRow).Once()
		mockRow.On("Scan", mock.Anything).Return(fmt.Errorf("db error")).Once()

		_, err := s.ScanTLS(ctx, &pb.ScanTLSRequest{Domain: "example.com", DnsScanId: "scan-123"})
		assert.Error(t, err)
		st, ok := status.FromError(err)
		assert.True(t, ok)
		assert.Equal(t, codes.Internal, st.Code())
		mockDb.AssertExpectations(t)
		mockRow.AssertExpectations(t)
	})

	t.Run("Success", func(t *testing.T) {
		mockDb := testutils.NewMockDatabase()
		mockPlugin := &MockTLSScanPlugin{}
		mockRow := &testutils.MockRow{}
		s := &Server{Db: mockDb, TlsPlugin: mockPlugin}
		result := db.TLSSecurityResult{TLSVersion: "TLSv1.3", CertificateValid: true}
		query := "SELECT EXISTS (SELECT 1 FROM dns_scan_results WHERE id = $1)"
		mockDb.On("QueryRow", query, "scan-123").Return(mockRow).Once()
		mockRow.On("Scan", mock.Anything).Run(func(args mock.Arguments) {
			*args.Get(0).(*bool) = true
		}).Return(nil).Once()
		mockPlugin.On("ScanTLS", "example.com", "scan-123").Return(result, nil).Once()
		mockPlugin.On("InsertTLSScanResult", "example.com", "scan-123", result).Return("tls-scan-123", nil).Once()

		resp, err := s.ScanTLS(ctx, &pb.ScanTLSRequest{Domain: "example.com", DnsScanId: "scan-123"})
		if !assert.NoError(t, err) {
			t.Logf("ScanTLS failed: %v", err)
			return
		}
		if !assert.NotNil(t, resp) {
			t.Log("Response is nil")
			return
		}
		assert.Equal(t, "tls-scan-123", resp.ScanId)
		assert.Equal(t, "TLSv1.3", resp.Result.TlsVersion)
		assert.True(t, resp.Result.CertificateValid)
		mockDb.AssertExpectations(t)
		mockRow.AssertExpectations(t)
		mockPlugin.AssertExpectations(t)
	})

	t.Run("ScanError", func(t *testing.T) {
		mockDb := testutils.NewMockDatabase()
		mockPlugin := &MockTLSScanPlugin{}
		mockRow := &testutils.MockRow{}
		s := &Server{Db: mockDb, TlsPlugin: mockPlugin}
		query := "SELECT EXISTS (SELECT 1 FROM dns_scan_results WHERE id = $1)"
		mockDb.On("QueryRow", query, "scan-123").Return(mockRow).Once()
		mockRow.On("Scan", mock.Anything).Run(func(args mock.Arguments) {
			*args.Get(0).(*bool) = true
		}).Return(nil).Once()
		mockPlugin.On("ScanTLS", "example.com", "scan-123").Return(db.TLSSecurityResult{}, fmt.Errorf("scan error")).Once()

		_, err := s.ScanTLS(ctx, &pb.ScanTLSRequest{Domain: "example.com", DnsScanId: "scan-123"})
		assert.Error(t, err)
		st, ok := status.FromError(err)
		assert.True(t, ok)
		assert.Equal(t, codes.Internal, st.Code())
		mockDb.AssertExpectations(t)
		mockRow.AssertExpectations(t)
		mockPlugin.AssertExpectations(t)
	})
}

func TestGetTLSScanResultsByDomain(t *testing.T) {
	ctx := context.Background()

	t.Run("PluginNotLoaded", func(t *testing.T) {
		s := &Server{}
		_, err := s.GetTLSScanResultsByDomain(ctx, &pb.GetTLSScanResultsByDomainRequest{Domain: "example.com"})
		assert.Error(t, err)
		st, ok := status.FromError(err)
		assert.True(t, ok)
		assert.Equal(t, codes.Unavailable, st.Code())
	})

	t.Run("InvalidDomain", func(t *testing.T) {
		s := &Server{TlsPlugin: &MockTLSScanPlugin{}}
		_, err := s.GetTLSScanResultsByDomain(ctx, &pb.GetTLSScanResultsByDomainRequest{Domain: ""})
		assert.Error(t, err)
		st, ok := status.FromError(err)
		assert.True(t, ok)
		assert.Equal(t, codes.InvalidArgument, st.Code())
	})

	t.Run("Success", func(t *testing.T) {
		mockPlugin := &MockTLSScanPlugin{}
		s := &Server{TlsPlugin: mockPlugin}
		createdAt := time.Now()
		results := []struct {
			ID        string
			Domain    string
			DNSScanID string
			Result    db.TLSSecurityResult
			CreatedAt time.Time
		}{
			{
				ID:        "tls-scan-123",
				Domain:    "example.com",
				DNSScanID: "scan-123",
				Result:    db.TLSSecurityResult{TLSVersion: "TLSv1.3", CertificateValid: true},
				CreatedAt: createdAt,
			},
		}
		mockPlugin.On("GetTLSScanResultsByDomain", "example.com").Return(results, nil).Once()

		resp, err := s.GetTLSScanResultsByDomain(ctx, &pb.GetTLSScanResultsByDomainRequest{Domain: "example.com"})
		if !assert.NoError(t, err) {
			t.Logf("GetTLSScanResultsByDomain failed: %v", err)
			return
		}
		if !assert.NotNil(t, resp) {
			t.Log("Response is nil")
			return
		}
		assert.Len(t, resp.Results, 1)
		assert.Equal(t, "tls-scan-123", resp.Results[0].Id)
		assert.Equal(t, "TLSv1.3", resp.Results[0].Result.TlsVersion)
		assert.True(t, resp.Results[0].Result.CertificateValid)
		assert.Equal(t, createdAt.Format(time.RFC3339), resp.Results[0].CreatedAt)
		mockPlugin.AssertExpectations(t)
	})

	t.Run("Error", func(t *testing.T) {
		mockPlugin := &MockTLSScanPlugin{}
		s := &Server{TlsPlugin: mockPlugin}
		mockPlugin.On("GetTLSScanResultsByDomain", "example.com").Return([]struct {
			ID        string
			Domain    string
			DNSScanID string
			Result    db.TLSSecurityResult
			CreatedAt time.Time
		}{}, fmt.Errorf("retrieve error")).Once()

		_, err := s.GetTLSScanResultsByDomain(ctx, &pb.GetTLSScanResultsByDomainRequest{Domain: "example.com"})
		assert.Error(t, err)
		st, ok := status.FromError(err)
		assert.True(t, ok)
		assert.Equal(t, codes.Internal, st.Code())
		mockPlugin.AssertExpectations(t)
	})
}

// Other tests (TestScanCrtSh, TestScanChaos, etc.) omitted for brevity
