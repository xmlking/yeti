package main

import (
	"net/http"
	"time"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/rs/zerolog/log"
	"github.com/xmlking/yeti/apps/goapi/handler"
	echov1 "github.com/xmlking/yeti/libs/gen/go/yeti/echo/v1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/keepalive"
)

func main() {
	grpcServer := grpc.NewServer(
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
	echov1.RegisterEchoServiceServer(grpcServer, echoHandler)

	httpOriginFunc := grpcweb.WithOriginFunc(func(origin string) bool {
		// Allow all origins, DO NOT do this in production
		return true
	})

	wrappedServer := grpcweb.WrapServer(
		grpcServer,
		httpOriginFunc,
	)

	handler := func(resp http.ResponseWriter, req *http.Request) {

		if wrappedServer.IsAcceptableGrpcCorsRequest(req) || wrappedServer.IsGrpcWebRequest(req) {
			wrappedServer.ServeHTTP(resp, req)
			return
		}

		// Fall back to other servers.
		http.DefaultServeMux.ServeHTTP(resp, req)
	}

	httpServer := http.Server{
		Addr:    ":9090",
		Handler: http.HandlerFunc(handler),
	}

	log.Info().Msgf("Starting server at :%s", "9090")

	if err := httpServer.ListenAndServe(); err != nil {
		log.Fatal().Msgf("failed starting http server: %v", err)
	}
}
