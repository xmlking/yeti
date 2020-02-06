# Envoy

### Prerequisite

```bash
wget -O ~/Downloads/protoc-gen-grpc-web https://github.com/grpc/grpc-web/releases/download/1.0.7/protoc-gen-grpc-web-1.0.7-darwin-x86_64
chmod +x ~/Downloads/protoc-gen-grpc-web
mv  ~/Downloads/protoc-gen-grpc-web /usr/local/bin/protoc-gen-grpc-web

yarn global add grpc-tools
```

```bash
protoc -I="./proto" ./proto/yeti/echo/v1/echo.proto \
--js_out=import_style=commonjs:./libs/gen/src/lib \
--grpc-web_out=import_style=typescript,mode=grpcwebtext:./libs/gen/src/lib
```

```bash
protoc --plugin=./node_modules/ts-proto/protoc-gen-ts_proto \
-I./proto  --ts_proto_out=apps/api/src/app/echo/interfaces  ./proto/yeti/echo/v1/echo.proto

protoc --plugin=./node_modules/ts-proto/protoc-gen-ts_proto \
-I./proto  --ts_proto_out=apps/api/src/app/account/interfaces  ./proto/yeti/account/v1/account.proto
```

### Reference

```bash
# minikube mount /Users/schintha/Developer/Work:/Work
# mount '/Work/SPA/yeti/envoy.yaml:/etc/envoy/envoy.yaml'
docker-compose up envoy


docker run -it --rm --name envoy \
-p 9090:9090 -p 9901:9901  \
-v "$(pwd)/envoy.yaml:/etc/envoy/envoy.yaml:ro"  \
envoyproxy/envoy:latest

docker exec -it envoy /bin/bash

# admin http://localhost:9901/



 curl 'http://localhost:9090/greetersrv/Greeter.Hello' \
 -H 'Content-Type: application/grpc-web+proto' \
 -H 'X-Grpc-Web: 1' \
 -H 'custom-header-1: value1' \
 -H 'Accept: */*' \
 -H 'Connection: keep-alive' \
 --data-binary $'\x00\x00\x00\x00\x05\n\x03abc' --compressed

 curl 'http://localhost:9090/greetersrv/Greeter.Hello' \
 -H 'Content-Type: application/json' \
 -d '{
    "name": "sumo"
   }'


curl 'http://localhost:9090/yeti.EchoService/Echo' \
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
-d '{
  "message": "sumo"
  }'

curl 'http://localhost:8080/travelbob.blogs.BlogsAPI/GetAllBlogs' \
-H 'Accept: application/grpc-web-text' \
-H 'Content-Type: application/grpc-web-text' \
-H 'X-Grpc-Web: 1' \
-H 'Connection: keep-alive' \
-H 'Accept-Encoding: gzip, deflate, br' \
--data-binary 'AAAAAAA=' --compressed


```

1. https://github.com/jrockway/jrock.us/blob/master/ingress/envoy.yaml
