package handler

import (
	"context"

	"github.com/rs/zerolog/log"
	echov1 "github.com/xmlking/yeti/libs/gen/go/yeti/echo/v1"
)

type echoHandler struct {
	echov1.UnimplementedEchoServiceServer
}

// NewEchoHandler return echoHandler
func NewEchoHandler() echov1.EchoServiceServer {
	return &echoHandler{}
}

// Hello method
func (s *echoHandler) Echo(ctx context.Context, req *echov1.EchoRequest) (*echov1.EchoResponse, error) {
	log.Info().Msg("Received Echo.Hello request")
	return &echov1.EchoResponse{Message: "Hello " + req.Message}, nil
}
