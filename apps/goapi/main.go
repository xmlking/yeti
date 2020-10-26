package main

import (
	"fmt"
  "github.com/rs/zerolog/log"
  "net"
	"time"

	"github.com/xmlking/yeti/apps/goapi/handler"
	echov1 "github.com/xmlking/yeti/libs/golib/yeti/echo/v1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/keepalive"
)

func main() {
	lis, err := net.Listen("tcp", fmt.Sprintf(":%s", "5555"))
	if err != nil {
		log.Fatal().Msgf("failed to listen: %v", err)
	}
	s := grpc.NewServer(
		grpc.ConnectionTimeout(time.Second),
		grpc.KeepaliveParams(keepalive.ServerParameters{
			MaxConnectionIdle: time.Second * 10,
			Timeout:           time.Second * 20,
		}),
		grpc.KeepaliveEnforcementPolicy(
			keepalive.EnforcementPolicy{
				MinTime:             time.Second,
				PermitWithoutStream: true,
			}),
		grpc.MaxConcurrentStreams(5),
  )
  	// create a server instance
  echoHandler := handler.NewEchoHandler()
// attach the Greeter service to the server
  echov1.RegisterEchoServiceServer(s, echoHandler)

  log.Info().Msgf("Starting server at :%s", "5555")
	if err := s.Serve(lis); err != nil {
    log.Fatal().Msgf("failed to serve: %v", err)
	}
}
