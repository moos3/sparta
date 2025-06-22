// internal/auth/casbin.go
package auth

import (
	"github.com/casbin/casbin/v2"
	"github.com/casbin/casbin/v2/model"
	"log"
)

type CasbinEnforcer struct {
	*casbin.Enforcer
}

func NewCasbinEnforcer() (*CasbinEnforcer, error) {
	modelText := `
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[role_definition]
g = _, _

[effect]
e = some(where (p.eft == allow))

[matchers]
m = g(r.sub, p.sub) && keyMatch(r.obj, p.obj) && regexMatch(r.act, p.act)
`
	m, err := model.NewModelFromString(modelText)
	if err != nil {
		return nil, err
	}

	// Use default in-memory policy store
	e, err := casbin.NewEnforcer(m)
	if err != nil {
		return nil, err
	}

	// Define policies
	policies := [][]string{
		{"admin", "/service.AuthService/*", "*"},
		{"admin", "/service.UserService/*", "*"},
		{"user", "/service.UserService/Scan*", "*"},
		{"user", "/service.UserService/Get*", "*"},
		{"viewer", "/service.UserService/Get*", "*"},
	}
	for _, p := range policies {
		if _, err := e.AddPolicy(p[0], p[1], p[2]); err != nil {
			return nil, err
		}
	}

	return &CasbinEnforcer{Enforcer: e}, nil
}

func (e *CasbinEnforcer) Authorize(sub, obj, act string) bool {
	ok, err := e.Enforce(sub, obj, act)
	if err != nil {
		log.Printf("Casbin enforcement error: %v", err)
		return false
	}
	return ok
}
