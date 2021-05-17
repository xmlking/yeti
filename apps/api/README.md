# API

## Description

Backend API build with [Nest](https://github.com/nestjs/nest) Framework.

### Generate

#### Generate code with protoc

1. Generate nest server-side code
1. Generate node server-side code (optional)
1. Generate grpc-web client-side code
1. Generate grpc-web client-side TS code (optional)

```bash
make proto
```

As an alternative to `make proto`, you can also generate same code manually...

```bash
protoc -I="./proto" ./proto/yeti/echo/v1/echo.proto \
--js_out=import_style=commonjs:/libs/gen/grpcweb/src/lib \
--grpc-web_out=import_style=typescript,mode=grpcwebtext:./libs/gen/grpcweb/src/lib
```

> Generate node server-side code

Refer [NESTJS](https://github.com/stephenh/ts-proto/blob/master/NESTJS.markdown)

```bash
protoc --plugin=./node_modules/ts-proto/protoc-gen-ts_proto \
-I="./proto" -I="third_party/proto" --ts_proto_opt=nestJs=true,addGrpcMetadata=true,exportCommonSymbols=false,addNestjsRestParameter=true --ts_proto_out=libs/gen/nest/src/lib  ./proto/yeti/echo/v1/echo.proto

protoc --plugin=./node_modules/ts-proto/protoc-gen-ts_proto \
-I="./proto" -I="third_party/proto" --ts_proto_opt=nestJs=true,addGrpcMetadata=true,exportCommonSymbols=false,addNestjsRestParameter=true --ts_proto_out=libs/gen/nest/src/lib  ./proto/yeti/account/v1/account.proto
```

#### Generate certs

```bash
# first time, generate local certs
./config/certs/certs.sh
```

### Run

#### Run Dev Mode

```bash
# start in watch mode
ng serve api
# start with TLS. ***To use with Envoy, start with TLS***
SECURE=true ng serve api
# to turn on logging for `request`
NODE_DEBUG=request ng serve api
DEBUG=typeorm:* ng serve api
# optionally you can run with prod env(environment.prod.ts) for testing! use this for testing only.
ng serve api --prod
```

> start envoy

```bash
docker compose up envoy
```

envoy admin: <http://localhost:9901/>

#### Test Dev Mode

```bash
# test API directly (nestJS)
grpcurl -plaintext \
-protoset <(buf build -o -) \
-d '{"message": "sumo"}' 0.0.0.0:5000 yeti.echo.v1.EchoService/Echo
# test API directly (nestJS) with TLS
grpcurl -insecure \
-protoset <(buf build -o -) \
-d '{"message": "sumo"}' 0.0.0.0:5000 yeti.echo.v1.EchoService/Echo

# test API via envoy
grpcurl -plaintext  \
-protoset <(buf build -o -) \
-d '{"message": "sumo"}' 0.0.0.0:9090 yeti.echo.v1.EchoService/Echo
# test API via envoy with TLS
grpcurl -cacert=config/certs/ca-cert.pem \
-protoset <(buf build -o -) \
-d '{"message": "sumo"}' localhost:9444 yeti.echo.v1.EchoService/Echo

# make sure `require_client_certificate: true` is enabled in `listeners.yaml` for following tests:

# test API via envoy with TLS, and client cert
grpcurl -cacert=config/certs/ca-cert.pem \
-cert=config/certs/client-cert.pem \
-key=config/certs/client-key.pem \
-protoset <(buf build -o -) \
-d '{"message": "sumo"}' localhost:9444 yeti.echo.v1.EchoService/Echo
# test with wrong client cert. This will fail!
grpcurl -cacert=config/certs/ca-cert.pem \
-cert=config/certs/upstream-cert.pem \
-key=config/certs/upstream-key.pem \
-protoset <(buf build -o -) \
-d '{"message": "sumo"}' localhost:9444 yeti.echo.v1.EchoService/Echo

# testing with request data from file.
grpcurl -cacert=config/certs/ca-cert.pem \
-protoset <(buf build -o -) \
-v -H trans_id=abc123 \
-d @ localhost:9444 yeti.echo.v1.EchoService/Echo <test/echo-request.json
```

#### Test gRPC-Web

```bash
# without TLS

 curl 'http://localhost:9090/greetersrv/Greeter.Hello' \
 -H 'Content-Type: application/grpc-web+proto' \
 -H 'X-Grpc-Web: 1' \
 -H 'custom-header-1: value1' \
 -H 'Accept: */*' \
 -H 'Connection: keep-alive' \
 --data-binary $'\x00\x00\x00\x00\x05\n\x03abc' --compressed

curl 'http://localhost:9090/yeti.EchoService/Echo' \
-H 'Accept: application/grpc-web-text' \
-H 'Content-Type: application/grpc-web-text' \
-H 'X-Grpc-Web: 1' \
-H 'Connection: keep-alive' \
-H 'Accept-Encoding: gzip, deflate, br' \
--data-binary 'AAAAAAYKBHN1bW8=' --compressed
```
