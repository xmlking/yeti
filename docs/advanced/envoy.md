# Envoy

### Prerequisite

```bash
wget -O ~/Downloads/protoc-gen-grpc-web https://github.com/grpc/grpc-web/releases/download/1.0.7/protoc-gen-grpc-web-1.0.7-darwin-x86_64
chmod +x ~/Downloads/protoc-gen-grpc-web
mv  ~/Downloads/protoc-gen-grpc-web /usr/local/bin/protoc-gen-grpc-web

yarn global add grpc-tools
```

```bash
protoc -I="./protos" ./protos/echo.proto \
--js_out=import_style=commonjs:./libs/gen/src/lib \
--grpc-web_out=import_style=typescript,mode=grpcwebtext:./libs/gen/src/lib
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


 curl 'http://localhost:9090/echo/yeti.EchoService/Echo' \
 -H 'Content-Type: application/grpc-web+proto' \
 -H 'X-Grpc-Web: 1' \
 -H 'custom-header-1: value1' \
 -H 'Accept: */*' \
 -H 'Connection: keep-alive' \
 --data-binary $'\x00\x00\x00\x00\x05\n\x03abc' --compressed

 curl 'http://localhost:9090/echo/yeti.EchoService/Echo' \
 -H 'Content-Type: application/json' \
 -d '{
    "message": "sumo"
   }'



```

1. https://github.com/jrockway/jrock.us/blob/master/ingress/envoy.yaml
