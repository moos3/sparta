// cmd/server/main_test.go
package main

import (
	"context"
	"fmt"
	"net"
	"net/http"
	"os"
	"path/filepath"
	"sync"
	"testing"
	"time"

	"github.com/moos3/sparta/internal/auth"
	"github.com/moos3/sparta/internal/config"
	"github.com/moos3/sparta/internal/db"
	"github.com/moos3/sparta/internal/email"
	"github.com/moos3/sparta/internal/plugin"
	"github.com/moos3/sparta/internal/server"
	"github.com/moos3/sparta/internal/testutils"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"google.golang.org/grpc"
)

// MockConfig stubs config.Config
type MockConfig struct {
	Server struct {
		GRPCPort int `yaml:"grpc_port"`
		HTTPPort int `yaml:"http_port"`
	}
}

// MockPluginManager stubs plugin.Manager
type MockPluginManager struct {
	mock.Mock
}

func (m *MockPluginManager) LoadPlugins(path string) ([]plugin.Plugin, error) {
	args := m.Called(path)
	return args.Get(0).([]plugin.Plugin), args.Error(1)
}

// MockPlugin stubs plugin.Plugin
type MockPlugin struct {
	mock.Mock
}

func (m *MockPlugin) Initialize() error {
	args := m.Called()
	return args.Error(0)
}

func (m *MockPlugin) Name() string {
	args := m.Called()
	return args.String(0)
}

// MockDNSScanPlugin stubs server.DNSScanPlugin
type MockDNSScanPlugin struct {
	MockPlugin
}

func (m *MockDNSScanPlugin) SetDatabase(db *db.Database) {
	m.Called(db)
}

func TestSetupServer(t *testing.T) {
	// Create temporary directory for plugins
	tmpDir, err := os.MkdirTemp("", "sparta-plugins")
	assert.NoError(t, err)
	defer os.RemoveAll(tmpDir)

	// Create a mock config.yaml
	configPath := filepath.Join(tmpDir, "config.yaml")
	err = os.WriteFile(configPath, []byte(`
server:
  grpc_port: 0
  http_port: 0
`), 0644)
	assert.NoError(t, err)

	// Mock dependencies
	mockDb := &testutils.MockDatabase{}
	mockDb.On("CreateUser", mock.Anything, mock.Anything, mock.Anything, mock.Anything).Return("user-123", nil)
	mockRow := &testutils.MockRow{}
	mockDb.On("QueryRow", mock.Anything, mock.Anything).Return(mockRow)
	mockRow.On("Scan", mock.Anything).Return(nil).Run(func(args mock.Arguments) {
		*args.Get(0).(*bool) = true
	})

	mockPluginManager := &MockPluginManager{}
	mockPlugin := &MockDNSScanPlugin{}
	mockPlugin.On("Name").Return("ScanDNS")
	mockPlugin.On("Initialize").Return(nil)
	mockPlugin.On("SetDatabase", mock.Anything)

	mockPluginManager.On("LoadPlugins", "./plugins").Return([]plugin.Plugin{mockPlugin}, nil)

	t.Run("Success", func(t *testing.T) {
		// Override functions within test case
		var configLoad = func(path string) (*config.Config, error) {
			return &config.Config{
				Server: struct {
					GRPCPort int `yaml:"grpc_port"`
					HTTPPort int `yaml:"http_port"`
				}{
					GRPCPort: 0, // Ephemeral port
					HTTPPort: 0,
				},
			}, nil
		}
		var dbNew = func(cfg *config.Config) (*db.Database, error) {
			return mockDb, nil
		}
		var pluginNewManager = func() plugin.Manager {
			return mockPluginManager
		}

		// Temporarily set overrides
		origConfigLoad, origDbNew, origPluginNewManager := config.Load, db.New, plugin.NewManager
		config.Load = configLoad
		db.New = dbNew
		plugin.NewManager = pluginNewManager
		defer func() {
			config.Load = origConfigLoad
			db.New = origDbNew
			plugin.NewManager = origPluginNewManager
		}()

		httpServer, grpcServer, lis, err := setupServer(&config.Config{})
		assert.NoError(t, err)
		assert.NotNil(t, httpServer)
		assert.NotNil(t, grpcServer)
		assert.NotNil(t, lis)

		var wg sync.WaitGroup
		wg.Add(2)

		go func() {
			defer wg.Done()
			if err := httpServer.ListenAndServe(); err != http.ErrServerClosed {
				t.Errorf("HTTP server error: %v", err)
			}
		}()

		go func() {
			defer wg.Done()
			if err := grpcServer.Serve(lis); err != nil {
				t.Errorf("gRPC server error: %v", err)
			}
		}()

		// Allow servers to start
		time.Sleep(100 * time.Millisecond)

		// Test connectivity
		conn, err := grpc.Dial(lis.Addr().String(), grpc.WithInsecure())
		assert.NoError(t, err)
		defer conn.Close()

		// Shutdown servers
		ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()
		err = httpServer.Shutdown(ctx)
		assert.NoError(t, err)
		grpcServer.GracefulStop()
		wg.Wait()

		mockPluginManager.AssertExpectations(t)
		mockPlugin.AssertExpectations(t)
	})

	t.Run("ConfigLoadError", func(t *testing.T) {
		var configLoad = func(path string) (*config.Config, error) {
			return nil, fmt.Errorf("config load error")
		}
		var dbNew = func(cfg *config.Config) (*db.Database, error) {
			return mockDb, nil
		}
		var pluginNewManager = func() plugin.Manager {
			return mockPluginManager
		}

		origConfigLoad, origDbNew, origPluginNewManager := config.Load, db.New, plugin.NewManager
		config.Load = configLoad
		db.New = dbNew
		plugin.NewManager = pluginNewManager
		defer func() {
			config.Load = origConfigLoad
			db.New = origDbNew
			plugin.NewManager = origPluginNewManager
		}()

		_, _, _, err := setupServer(&config.Config{})
		assert.Error(t, err)
		assert.Contains(t, err.Error(), "failed to load config")
	})

	t.Run("DatabaseError", func(t *testing.T) {
		var configLoad = func(path string) (*config.Config, error) {
			return &config.Config{
				Server: struct {
					GRPCPort int `yaml:"grpc_port"`
					HTTPPort int `yaml:"http_port"`
				}{GRPCPort: 0, HTTPPort: 0},
			}, nil
		}
		var dbNew = func(cfg *config.Config) (*db.Database, error) {
			return nil, fmt.Errorf("db error")
		}
		var pluginNewManager = func() plugin.Manager {
			return mockPluginManager
		}

		origConfigLoad, origDbNew, origPluginNewManager := config.Load, db.New, plugin.NewManager
		config.Load = configLoad
		db.New = dbNew
		plugin.NewManager = pluginNewManager
		defer func() {
			config.Load = origConfigLoad
			db.New = origDbNew
			plugin.NewManager = origPluginNewManager
		}()

		_, _, _, err := setupServer(&config.Config{})
		assert.Error(t, err)
		assert.Contains(t, err.Error(), "failed to connect to database")
	})

	t.Run("ListenError", func(t *testing.T) {
		var configLoad = func(path string) (*config.Config, error) {
			return &config.Config{
				Server: struct {
					GRPCPort int `yaml:"grpc_port"`
					HTTPPort int `yaml:"http_port"`
				}{GRPCPort: -1, HTTPPort: 0},
			}, nil
		}
		var dbNew = func(cfg *config.Config) (*db.Database, error) {
			return mockDb, nil
		}
		var pluginNewManager = func() plugin.Manager {
			return mockPluginManager
		}

		origConfigLoad, origDbNew, origPluginNewManager := config.Load, db.New, plugin.NewManager
		config.Load = configLoad
		db.New = dbNew
		plugin.NewManager = pluginNewManager
		defer func() {
			config.Load = origConfigLoad
			db.New = origDbNew
			plugin.NewManager = origPluginNewManager
		}()

		_, _, _, err := setupServer(&config.Config{})
		assert.Error(t, err)
		assert.Contains(t, err.Error(), "failed to listen on port")
	})
}
