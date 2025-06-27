# Setup Instructions

### Install dependencies:

- Go: `go mod init github.com/your-org/grpc-service`
- Node.js: `cd web && npm install @mui/material @emotion/react @emotion/styled grpc-web`
- PostgreSQL: Install and create database
- Protobuf: Install `protoc` and `protoc-gen-go`, `protoc-gen-go-grpc`, `protoc-gen-grpc-web`

Generate gRPC code:

```
protoc --go_out=. --go-grpc_out=. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. proto/service.proto
```

### Build plugins:

Create .so files in ./plugins directory implementing the Plugin interface

### Configure:
Update config.yaml with your database and email settings

### Run:
```bash
# Start PostgreSQL
psql -f schema.sql

# Build and run server
go build -o server cmd/server/main.go
./server

# Build and run web app
cd web
npm run build
# Serve through the Go server
```
### Features

- Plugin Support: Dynamically loads .so plugins from the plugins directory
- Authentication: API keys with 90-day expiration
- Email Notifications: Sends new API keys via email
- Database: Stores users and invite tokens in PostgreSQL
- Configuration: YAML-based configuration
- Web Interface: Dark mode React + Material UI application for user management
- gRPC: Secure communication with client authentication

### Notes

- The web application uses gRPC-Web to communicate with the server
- API keys are automatically rotated every 24 hours for expired keys
- Invite tokens are valid for 24 hours
- Plugins must implement the Plugin interface and be compiled as .so files
- Email service requires a valid SMTP configuration
- The server exposes both gRPC (port 50051) and HTTP (port 8080) endpoints

