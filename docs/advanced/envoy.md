# Envoy

## Configuration

Envoy can be configured dynamically in real time without any downtime.

- Listener discovery service  —  configures on what ports envoy listens on, and the action to take on the incoming connections.
- Cluster discovery service  —  configures the upstream clusters. Envoy will route incoming connections/requests to these clusters.
- Route discovery service  —  configures L7 routes for incoming requests.
- Endpoint discovery service  —  allows envoy to dynamically discover cluster membership and health information.
- Secret discovery service  —  allows envoy to discover ssl secrets. This is used to configure ssl secrets independently of the listener, and allows to provide ssl secrets from a local node, instead of a centralized control plane.

**Best Practice:** Here we are using partitioned file-based dynamic configuration.

## Start

```bash
# minikube mount /Users/schintha/Developer/Work:/Work
# mount '/Work/SPA/yeti/envoy.yaml:/etc/envoy/envoy.yaml'
docker-compose up envoy

# (or) start standalone envoy container
docker run -it --rm --name envoy2 \
-p 9901:9901 -p 9090:9090 -p 9444:9443  \
-v `pwd`/config/base/envoy/config/:/etc/envoy:ro \
-v `pwd`/config/base/secrets/certs/:/etc/certs:ro \
envoyproxy/envoy-alpine:v1.14.1
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
1. <https://github.com/jrockway/jrock.us/blob/master/ingress/envoy.yaml>
1. <https://blog.turbinelabs.io/setting-up-ssl-with-envoy-f7c5aa06a5ce>
