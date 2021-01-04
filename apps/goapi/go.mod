module github.com/xmlking/yeti/apps/goapi

go 1.16

replace github.com/xmlking/yeti/libs/gen/go v0.1.5 => ../../libs/gen/go

require (
	github.com/desertbit/timer v0.0.0-20180107155436-c41aec40b27f // indirect
	github.com/gorilla/websocket v1.4.2 // indirect
	github.com/improbable-eng/grpc-web v0.13.0
	github.com/mwitkow/go-conntrack v0.0.0-20190716064945-2f068394615f // indirect
	github.com/rs/cors v1.7.0 // indirect
	github.com/rs/zerolog v1.20.0
	github.com/xmlking/yeti/libs/gen/go v0.1.5
	google.golang.org/grpc v1.34.0
)
