# API

## Description

Backend API build with [Nest](https://github.com/nestjs/nest) Framework.

### Generate

> Generate Interfaces from proto

```bash
protoc --plugin=./node_modules/ts-proto/protoc-gen-ts_proto -I./proto  --ts_proto_out=apps/api/src/app/echo/interfaces  ./proto/echo.proto
```

> Generate certs

```bash
# first time, generate local certs
./deploy/overlays/e2e/secrets/certs/certs.sh
```

### Run

#### Run Dev Mode

```bash
# start in watch mode
ng serve api
# start with TLS
SECURE=true ng serve api
# to turn on logging for `request`
NODE_DEBUG=request ng serve api
DEBUG=typeorm:* ng serve api
# optionally you can run with prod env(environment.prod.ts) for testing! use this for testing only.
ng serve api --prod
```

> start envoy

```bash
docker-compose up envoy
```

envoy admin: <http://localhost:9901/>

#### Test Dev Mode

```bash
# test API directly (nestJS)
grpcurl -plaintext \
-protoset <(buf image build -o -) \
-d '{"message": "sumo"}' 0.0.0.0:5000 yeti.echo.v1.EchoService/Echo
# test API directly (nestJS) with TLS
grpcurl -insecure \
-protoset <(buf image build -o -) \
-d '{"message": "sumo"}' 0.0.0.0:5000 yeti.echo.v1.EchoService/Echo

# test API via envoy
grpcurl -plaintext  \
-protoset <(buf image build -o -) \
-d '{"message": "sumo"}' 0.0.0.0:9090 yeti.echo.v1.EchoService/Echo
# test API via envoy with TLS
grpcurl -cacert=deploy/overlays/e2e/secrets/certs/ca-cert.pem \
-protoset <(buf image build -o -) \
-d '{"message": "sumo"}' localhost:9444 yeti.echo.v1.EchoService/Echo

# make sure `require_client_certificate: true` is enabled in `listeners.yaml` for following tests:

# test API via envoy with TLS, and client cert
grpcurl -cacert=deploy/overlays/e2e/secrets/certs/ca-cert.pem \
-cert=deploy/overlays/e2e/secrets/certs/client-cert.pem \
-key=deploy/overlays/e2e/secrets/certs/client-key.pem \
-protoset <(buf image build -o -) \
-d '{"message": "sumo"}' localhost:9444 yeti.echo.v1.EchoService/Echo
# test with wrong client cert. This will fail!
grpcurl -cacert=deploy/overlays/e2e/secrets/certs/ca-cert.pem \
-cert=deploy/overlays/e2e/secrets/certs/upstream-cert.pem \
-key=deploy/overlays/e2e/secrets/certs/upstream-key.pem \
-protoset <(buf image build -o -) \
-d '{"message": "sumo"}' localhost:9444 yeti.echo.v1.EchoService/Echo
```
