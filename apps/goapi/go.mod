module github.com/xmlking/yeti/apps/goapi

go 1.15

replace github.com/xmlking/yeti/libs/golib v0.1.4 => ../../libs/golib

require (
	github.com/rs/zerolog v1.20.0
	github.com/xmlking/yeti/libs/golib v0.1.4
	google.golang.org/grpc v1.31.0
)
