# Envoy

## Start

```bash
# minikube mount /Users/schintha/Developer/Work:/Work
# mount '/Work/SPA/yeti/envoy.yaml:/etc/envoy/envoy.yaml'
docker-compose up envoy

# (or) start standalone envoy container
docker run -it --rm --name envoy \
-p 9090:9090 -p 9901:9901  \
-v "$(pwd)/envoy.yaml:/etc/envoy/envoy.yaml:ro"  \
envoyproxy/envoy:latest
# ssh if needed
docker exec -it envoy /bin/bash
```

## Test

 admin <http://localhost:9901/>

```bash
 curl '<http://localhost:9090/greetersrv/Greeter.Hello'> \
 -H 'Content-Type: application/grpc-web+proto' \
 -H 'X-Grpc-Web: 1' \
 -H 'custom-header-1: value1' \
 -H 'Accept: */*' \
 -H 'Connection: keep-alive' \
 --data-binary $'\x00\x00\x00\x00\x05\n\x03abc' --compressed

 curl '<http://localhost:9090/greetersrv/Greeter.Hello'> \
 -H 'Content-Type: application/json' \
 -d '{
    "name": "sumo"
   }'

curl '<http://localhost:9090/yeti.EchoService/Echo'> \
 -H 'Content-Type: application/grpc-web+proto' \
 -H 'X-Grpc-Web: 1' \
 -H 'custom-header-1: value1' \
 -H 'Accept: */*' \
 -H 'Connection: keep-alive' \
 --data-binary $'\x00\x00\x00\x00\x05\n\x03abc' --compressed

curl '<http://localhost:9090/yeti.EchoService/Echo'> \
-H 'Accept: application/grpc-web-text' \
-H 'Content-Type: application/grpc-web-text' \
-H 'X-Grpc-Web: 1' \
-H 'Connection: keep-alive' \
-H 'Accept-Encoding: gzip, deflate, br' \
-d '{
  "message": "sumo"
  }'

curl '<http://localhost:8080/travelbob.blogs.BlogsAPI/GetAllBlogs'> \
-H 'Accept: application/grpc-web-text' \
-H 'Content-Type: application/grpc-web-text' \
-H 'X-Grpc-Web: 1' \
-H 'Connection: keep-alive' \
-H 'Accept-Encoding: gzip, deflate, br' \
--data-binary 'AAAAAAA=' --compressed
```

### Reference

1. <https://github.com/jrockway/jrock.us/blob/master/ingress/envoy.yaml>
