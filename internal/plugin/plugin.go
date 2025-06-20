// internal/plugin/plugin.go
package plugin

import (
	"log"
	"os"
	"path/filepath"
	"plugin"
)

type Plugin interface {
	Initialize() error
	Name() string
}

type Manager struct{}

func NewManager() *Manager {
	return &Manager{}
}

func (m *Manager) LoadPlugins(dir string) ([]Plugin, error) {
	var plugins []Plugin

	if _, err := os.Stat(dir); os.IsNotExist(err) {
		log.Printf("Plugin directory %s does not exist, skipping plugin loading", dir)
		return plugins, nil
	}

	files, err := os.ReadDir(dir)
	if err != nil {
		return nil, err
	}

	for _, file := range files {
		if filepath.Ext(file.Name()) != ".so" {
			continue
		}

		p, err := plugin.Open(filepath.Join(dir, file.Name()))
		if err != nil {
			log.Printf("Failed to load plugin %s: %v", file.Name(), err)
			continue
		}

		sym, err := p.Lookup("Plugin")
		if err != nil {
			log.Printf("Plugin %s has no Plugin symbol: %v", file.Name(), err)
			continue
		}

		pl, ok := sym.(Plugin)
		if !ok {
			log.Printf("Plugin %s does not implement Plugin interface", file.Name())
			continue
		}

		plugins = append(plugins, pl)
	}

	return plugins, nil
}
