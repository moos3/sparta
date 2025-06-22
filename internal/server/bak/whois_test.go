// internal/server/whois_test.go
package bak

import (
	"context"
	"fmt"
	"testing"
	"time"

	"github.com/moos3/sparta/internal/db"
	"github.com/moos3/sparta/internal/testutils"
	pb "github.com/moos3/sparta/proto"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type MockWhoisScanPlugin struct {
	mock.Mock
}

func (m *MockWhoisScanPlugin) Initialize() error {
	args := m.Called()
	return args.Error(0)
}

func (m *MockWhoisScanPlugin) Name() string {
	args := m.Called()
	return args.String(0)
}

func (m *MockWhoisScanPlugin) SetDatabase(db db.Database) {
	m.Called(db)
}

func (m *MockWhoisScanPlugin) ScanWhois(domain string, dnsScanID string) (db.WhoisSecurityResult, error) {
	args := m.Called(domain, dnsScanID)
	return args.Get(0).(db.WhoisSecurityResult), args.Error(1)
}

func (m *MockWhoisScanPlugin) InsertWhoisScanResult(domain string, dnsScanID string, result db.WhoisSecurityResult) (string, error) {
	args := m.Called(domain, dnsScanID, result)
	return args.String(0), args.Error(1)
}

func (m *MockWhoisScanPlugin) GetWhoisScanResultsByDomain(domain string) ([]struct {
	ID        string
	Domain    string
	DNSScanID string
	Result    db.WhoisSecurityResult
	CreatedAt time.Time
}, error) {
	args := m.Called(domain)
	return args.Get(0).([]struct {
		ID        string
		Domain    string
		DNSScanID string
		Result    db.WhoisSecurityResult
		CreatedAt time.Time
	}), args.Error(1)
}

func TestScanWhois(t *testing.T) {
	mockDb := testutils.NewMockDatabase()
	mockPlugin := &MockWhoisScanPlugin{}
	mockRow := &testutils.MockRow{}
	s := &server.Server{Db: mockDb, WhoisPlugin: mockPlugin}
	ctx := context.Background()

	t.Run("PluginNotLoaded", func(t *testing.T) {
		s.WhoisPlugin = nil
		_, err := s.ScanWhois(ctx, &pb.ScanWhoisRequest{Domain: "example.com", DnsScanId: "scan-123"})
		assert.Error(t, err)
		st, ok := status.FromError(err)
		assert.True(t, ok)
		assert.Equal(t, codes.Unavailable, st.Code())
	})

	t.Run("InvalidDomain", func(t *testing.T) {
		s.WhoisPlugin = mockPlugin
		_, err := s.ScanWhois(ctx, &pb.ScanWhoisRequest{Domain: "", DnsScanId: "scan-123"})
		assert.Error(t, err)
		st, ok := status.FromError(err)
		assert.True(t, ok)
		assert.Equal(t, codes.InvalidArgument, st.Code())
	})

	t.Run("InvalidDnsScanID", func(t *testing.T) {
		s.WhoisPlugin = mockPlugin
		s.Db = mockDb
		mockDb.On("QueryRow", "SELECT EXISTS (SELECT 1 FROM dns_scan_results WHERE id = $1)", "scan-123").Return(mockRow)
		mockRow.On("Scan", mock.Anything).Return(fmt.Errorf("db error"))

		_, err := s.ScanWhois(ctx, &pb.ScanWhoisRequest{Domain: "example.com", DnsScanId: "scan-123"})
		assert.Error(t, err)
		st, ok := status.FromError(err)
		assert.True(t, ok)
		assert.Equal(t, codes.InvalidArgument, st.Code())
		mockDb.AssertExpectations(t)
		mockRow.AssertExpectations(t)
	})

	t.Run("Success", func(t *testing.T) {
		result := db.WhoisSecurityResult{Registrar: "GoDaddy"}
		s.Db = mockDb
		s.WhoisPlugin = mockPlugin
		mockDb.On("QueryRow", "SELECT EXISTS (SELECT 1 FROM dns_scan_results WHERE id = $1)", "scan-123").Return(mockRow)
		mockRow.On("Scan", mock.Anything).Return(nil).Run(func(args mock.Arguments) {
			*args.Get(0).(*bool) = true
		})
		mockPlugin.On("ScanWhois", "example.com", "scan-123").Return(result, nil)
		mockPlugin.On("InsertWhoisScanResult", "example.com", "scan-123", result).Return("whois-scan-123", nil)

		resp, err := s.ScanWhois(ctx, &pb.ScanWhoisRequest{Domain: "example.com", DnsScanId: "scan-123"})
		assert.NoError(t, err)
		assert.Equal(t, "whois-scan-123", resp.ScanId)
		assert.Equal(t, "GoDaddy", resp.Result.Registrar)
		mockDb.AssertExpectations(t)
		mockRow.AssertExpectations(t)
		mockPlugin.AssertExpectations(t)
	})
}
