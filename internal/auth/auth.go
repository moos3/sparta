package auth

import (
	"crypto/rand"
	"encoding/hex"
	"log"
	"time"

	"github.com/moos3/sparta/internal/config"
	"github.com/moos3/sparta/internal/db"
	"github.com/moos3/sparta/internal/email"
)

type Auth struct {
	db    *db.Database
	email *email.Service
	cfg   *config.Config
}

func New(db *db.Database, email *email.Service, cfg *config.Config) *Auth {
	return &Auth{
		db:    db,
		email: email,
		cfg:   cfg,
	}
}

func (a *Auth) GenerateAPIKey() (string, error) {
	bytes := make([]byte, a.cfg.Auth.APIKeyLength/2)
	if _, err := rand.Read(bytes); err != nil {
		return "", err
	}
	return hex.EncodeToString(bytes), nil
}

func (a *Auth) RotateExpiredKeys() error {
	rows, err := a.db.Query("SELECT id, email FROM users WHERE api_key_expires_at < $1", time.Now())
	if err != nil {
		return err
	}
	defer rows.Close()

	for rows.Next() {
		var id, email string
		if err := rows.Scan(&id, &email); err != nil {
			return err
		}

		newAPIKey, err := a.GenerateAPIKey()
		if err != nil {
			log.Printf("Failed to generate new API key for user %s: %v", id, err)
			continue
		}

		expiresAt := time.Now().Add(90 * 24 * time.Hour)
		_, err = a.db.Exec(
			"UPDATE users SET api_key = $1, api_key_expires_at = $2 WHERE id = $3",
			newAPIKey, expiresAt, id)
		if err != nil {
			log.Printf("Failed to update API key for user %s: %v", id, err)
			continue
		}

		a.email.SendAPIKeyEmail(email, newAPIKey)
		log.Printf("Rotated API key for user %s", id)
	}

	return nil
}
