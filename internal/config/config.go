package config

import (
	"os"

	"gopkg.in/yaml.v2"
)

type Config struct {
	Database struct {
		Host     string `yaml:"host"`
		Port     int    `yaml:"port"`
		User     string `yaml:"user"`
		Password string `yaml:"password"`
		DBName   string `yaml:"dbname"`
	} `yaml:"database"`
	Server struct {
		GRPCPort int `yaml:"grpc_port"`
		HTTPPort int `yaml:"http_port"`
	} `yaml:"server"`
	Email struct {
		APIKey      string `yaml:"api_key"`
		SenderEmail string `yaml:"sender_email"`
		SenderName  string `yaml:"sender_name"`
	} `yaml:"email"`
	Auth struct {
		APIKeyLength int `yaml:"api_key_length"`
	} `yaml:"auth"`
	Chaos struct {
		APIKey       string `yaml:"api_key"`
		BaseURL      string `yaml:"base_url"`
		RequestDelay int    `yaml:"request_delay"` // in milliseconds
	} `yaml:"chaos"`
	Shodan struct {
		APIKey       string `yaml:"api_key"`
		RequestDelay int    `yaml:"request_delay"` // in milliseconds
	} `yaml:"shodan"`
	OTX struct {
		APIKey       string `yaml:"apikey"`
		BaseURL      string `yaml:"baseurl"`
		RequestDelay int    `yaml:"request_delay"`
	} `yaml:"otx"`
}

func Load(path string) (*Config, error) {
	data, err := os.ReadFile(path)
	if err != nil {
		return nil, err
	}

	var cfg Config
	if err := yaml.Unmarshal(data, &cfg); err != nil {
		return nil, err
	}

	// Set default values if not provided
	if cfg.Chaos.BaseURL == "" {
		cfg.Chaos.BaseURL = "https://dns.projectdiscovery.io/dns"
	}
	if cfg.Chaos.RequestDelay == 0 {
		cfg.Chaos.RequestDelay = 100 // Default to 100ms (10 requests/second)
	}
	if cfg.Email.SenderName == "" {
		cfg.Email.SenderName = "Sparta Service"
	}
	if cfg.Shodan.RequestDelay == 0 {
		cfg.Shodan.RequestDelay = 2500 // Default to 2.5 seconds
	}

	return &cfg, nil
}
