-- Test API User
INSERT INTO users (id, email, name, api_key, api_key_expires_at) VALUES
('550e8400-e29b-41d4-a716-446655440000', 'test@example.com', 'Test User', 'test-api-key-1234567890', '2025-09-18 12:00:00');

-- Grants
CREATE USER sparta_user WITH PASSWORD 'forsparta';
GRANT ALL PRIVILEGES ON DATABASE sparta TO sparta_user;
GRANT ALL ON SCHEMA public TO sparta_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO sparta_user;
GRANT CONNECT ON DATABASE sparta TO sparta_user;

-- Grant permissions on all existing tables and sequences
GRANT ALL ON ALL TABLES IN SCHEMA public TO sparta_user;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO sparta_user;

-- Ensure schema usage
GRANT USAGE ON SCHEMA public TO sparta_user;

-- Set default privileges for future tables
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO sparta_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO sparta_user;

SELECT table_schema, table_name FROM information_schema.tables WHERE table_name = 'users';
GRANT ALL ON TABLE public.users TO sparta_user;
GRANT ALL ON TABLE public.invite_tokens TO sparta_user;

-- Users
DROP TABLE IF EXISTS api_keys;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id TEXT PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    is_admin BOOLEAN NOT NULL,
    created_at TIMESTAMP NOT NULL
);
-- First User
-- use uuidgen for user uuid, bcrypt to make hash
-- password secure123
INSERT INTO users (id, first_name, last_name, email,
                   password_hash, is_admin, created_at)
    VALUES ('9168B6B9-5B64-4CD3-AB1E-A16AB13C21A8',
            'Admin',
            'User',
            'admin@example.com',
            '$2b$12$o5vD3LdJ8w3N0Aro521Gp.L4kjw.0PkT.TgIpe9G8q4lRbdrWmWki',
            true, NOW());

CREATE TABLE api_keys (
    api_key TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id),
    role TEXT NOT NULL CHECK (role IN ('admin', 'user', 'viewer')),
    is_service_key BOOLEAN NOT NULL,
    is_active BOOLEAN NOT NULL,
    deactivation_message TEXT,
    created_at TIMESTAMP NOT NULL,
    expires_at TIMESTAMP NOT NULL
);
-- First API Key
-- openssl rand -hex 32
INSERT INTO api_keys (
          api_key, user_id, role, is_service_key,
          is_active, created_at, expires_at
          )VALUES (
                '353dfbc9c41fb4897c79781480d2ec79f04433a6ee40601aa35bc6df030df5ac',
                '9168B6B9-5B64-4CD3-AB1E-A16AB13C21A8',
                'admin',
                false,
                true,
                NOW(),
                NOW() + INTERVAL '30 days'
         );

CREATE TABLE invitations (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL,
    token TEXT UNIQUE NOT NULL,
    invited_by TEXT NOT NULL REFERENCES users(id),
    is_admin BOOLEAN NOT NULL,
    created_at TIMESTAMP NOT NULL,
    expires_at TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS invite_tokens (
    token VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Plugin data storage
CREATE TABLE IF NOT EXISTS dns_scan_results (
    id UUID PRIMARY KEY,
    domain VARCHAR(255) NOT NULL,
    result JSONB NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_domain ON dns_scan_results (domain);

CREATE TABLE risk_scores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    domain TEXT NOT NULL,
    dns_scan_id UUID NOT NULL REFERENCES dns_scan_results(id),
    score INTEGER NOT NULL,
    risk_tier TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_risk_scores_domain ON risk_scores (domain);

CREATE TABLE IF NOT EXISTS tls_scan_results (
    id UUID PRIMARY KEY,
    domain VARCHAR(255) NOT NULL,
    dns_scan_id UUID NOT NULL,
    result JSONB NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (dns_scan_id) REFERENCES dns_scan_results(id),
);
CREATE INDEX IF NOT EXISTS idx_tls_scan_results_domain ON tls_scan_results (domain);
CREATE INDEX IF NOT EXISTS idx_tls_scan_results_dns_scan_id ON tls_scan_results (dns_scan_id);

-- crt.sh data sets
CREATE TABLE IF NOT EXISTS crtsh_scan_results (
    id UUID PRIMARY KEY,
    domain VARCHAR(255) NOT NULL,
    dns_scan_id UUID NOT NULL,
    result JSONB NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (dns_scan_id) REFERENCES dns_scan_results(id)
);
CREATE INDEX IF NOT EXISTS idx_crtsh_scan_results_domain ON crtsh_scan_results (domain);
CREATE INDEX IF NOT EXISTS idx_crtsh_scan_results_dns_scan_id ON crtsh_scan_results(dns_scan_id);

-- chaos.projectdiscovery.org data
CREATE TABLE IF NOT EXISTS chaos_scan_results (
    id UUID PRIMARY KEY,
    domain VARCHAR(255) NOT NULL,
    dns_scan_id UUID NOT NULL,
    result JSONB NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (dns_scan_id) REFERENCES dns_scan_results(id)
);
CREATE INDEX IF NOT EXISTS idx_chaos_scan_results_domain ON chaos_scan_results (domain);
CREATE INDEX IF NOT EXISTS idx_chaos_scan_results_dns_scan_id ON chaos_scan_results (dns_scan_id);

-- shodan.io datasets
CREATE TABLE IF NOT EXISTS shodan_scan_results (
    id UUID PRIMARY KEY,
    domain VARCHAR(255) NOT NULL,
    dns_scan_id UUID NOT NULL,
    result JSONB NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (dns_scan_id) REFERENCES dns_scan_results(id)
);
CREATE INDEX IF NOT EXISTS idx_shodan_scan_results_domain ON shodan_scan_results (domain);
CREATE INDEX IF NOT EXISTS idx_shodan_scan_results_dns_scan_id ON shodan_scan_results (dns_scan_id);

-- whois data
CREATE TABLE whois_scan_results (
    id UUID PRIMARY KEY,
    domain TEXT NOT NULL,
    dns_scan_id UUID NOT NULL,
    result JSONB NOT NULL,
    created_at TIMESTAMP NOT NULL,
    FOREIGN KEY (dns_scan_id) REFERENCES dns_scan_results(id)
);
CREATE INDEX IF NOT EXISTS idx_whois_scan_results_domain ON whois_scan_results (domain);
CREATE INDEX IF NOT EXISTS idx_whois_scan_results_dns_scan_id ON whois_scan_results (dns_scan_id);

-- otx data
CREATE TABLE otx_scan_results (
    id TEXT PRIMARY KEY,
    domain TEXT,
    dns_scan_id TEXT,
    result JSONB,
    created_at TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_otx_scan_results_domain ON otx_scan_results (domain);
CREATE INDEX IF NOT EXISTS idx_otx_scan_results_dns_scan_id ON otx_scan_results (dns_scan_id);

-- abusech_scan_results
CREATE TABLE abusech_scan_results (
    id TEXT PRIMARY KEY,
    domain TEXT,
    dns_scan_id TEXT,
    result JSONB,
    created_at TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_abusech_scan_results_domain ON abusech_scan_results (domain);
CREATE INDEX IF NOT EXISTS idx_abusech_scan_results_dns_scan_id ON abusech_scan_results (dns_scan_id);

CREATE TABLE reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    domain TEXT NOT NULL,
    dns_scan_id UUID NOT NULL REFERENCES dns_scan_results(id),
    score INTEGER NOT NULL,
    risk_tier TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE isc_scan_results (
    id TEXT PRIMARY KEY,
    domain TEXT,
    dns_scan_id TEXT,
    result JSONB,
    created_at TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_isc_scan_results_domain ON isc_scan_results (domain);
CREATE INDEX IF NOT EXISTS idx_isc_scan_results_dns_scan_id ON isc_scan_results (dns_scan_id)