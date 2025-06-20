package email

import (
	"fmt"
	"log"

	"github.com/moos3/sparta/internal/config"
	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

type Service struct {
	cfg *config.Config
}

func New(cfg *config.Config) *Service {
	return &Service{cfg: cfg}
}

func (s *Service) SendAPIKeyEmail(to, apiKey string) {
	from := mail.NewEmail(s.cfg.Email.SenderName, s.cfg.Email.SenderEmail)
	toEmail := mail.NewEmail("", to)
	subject := "Your API Key"
	body := fmt.Sprintf("Your API key is: %s\nPlease keep it secure.", apiKey)
	message := mail.NewSingleEmail(from, subject, toEmail, body, body)

	client := sendgrid.NewSendClient(s.cfg.Email.APIKey)
	response, err := client.Send(message)
	if err != nil {
		log.Printf("Failed to send email to %s: %v", to, err)
		return
	}

	if response.StatusCode < 200 || response.StatusCode >= 300 {
		log.Printf("Failed to send email to %s: status %d, body: %s", to, response.StatusCode, response.Body)
	} else {
		log.Printf("Email sent successfully to %s", to)
	}
}
