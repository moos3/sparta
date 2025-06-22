// internal/email/email.go
package email

import (
	"fmt"

	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

type Service struct {
	client    *sendgrid.Client
	fromEmail string
}

func New(apiKey, fromEmail string) *Service {
	return &Service{
		client:    sendgrid.NewSendClient(apiKey),
		fromEmail: fromEmail,
	}
}

func (s *Service) Send(to, subject, body string) error {
	from := mail.NewEmail("Sparta", s.fromEmail)
	toEmail := mail.NewEmail("", to)
	message := mail.NewSingleEmail(from, subject, toEmail, body, body)
	response, err := s.client.Send(message)
	if err != nil {
		return fmt.Errorf("failed to send email: %v", err)
	}
	if response.StatusCode < 200 || response.StatusCode >= 300 {
		return fmt.Errorf("failed to send email, status code: %d, body: %s", response.StatusCode, response.Body)
	}
	return nil
}

func (s *Service) SendWelcomeEmail(to, firstName string) error {
	subject := "Welcome to Sparta!"
	body := fmt.Sprintf("Dear %s,\n\nWelcome to Sparta! Your account has been successfully created. You can now log in and start using our services.\n\nBest regards,\nThe Sparta Team", firstName)
	return s.Send(to, subject, body)
}
