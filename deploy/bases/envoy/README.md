# envoy

### Prerequisite

```bash
wget -O ~/Downloads/protoc-gen-grpc-web https://github.com/grpc/grpc-web/releases/download/1.0.7/protoc-gen-grpc-web-1.0.7-darwin-x86_64
chmod +x ~/Downloads/protoc-gen-grpc-web
mv  ~/Downloads/protoc-gen-grpc-web /usr/local/bin/protoc-gen-grpc-web

yarn global add grpc-tools
```

### Configuration

Envoy can be configured dynamically in real time without any downtime.

- Listener discovery service  —  configures on what ports envoy listens on, and the action to take on the incoming connections.
- Cluster discovery service  —  configures the upstream clusters. Envoy will route incoming connections/requests to these clusters.
- Route discovery service  —  configures L7 routes for incoming requests.
- Endpoint discovery service  —  allows envoy to dynamically discover cluster membership and health information.
- Secret discovery service  —  allows envoy to discover ssl secrets. This is used to configure ssl secrets independently of the listener, and allows to provide ssl secrets from a local node, instead of a centralized control plane.

**Best Practice:** Here we are using partitioned file-based dynamic configuration.

### Run

```bash
# minikube mount /Users/schintha/Developer/Work:/Work
docker-compose up envoy


docker run -it --rm --name envoy2 \
-p 9901:9901 -p 9090:9090 -p 9444:9443  \
-v `pwd`/deploy/bases/envoy/config/:/etc/envoy:ro \
-v `pwd`/deploy/overlays/e2e/secrets/certs:/etc/certs:ro \
envoyproxy/envoy-alpine:v1.14.1

docker exec -it envoy /bin/bash
```

### test

open admin <http://localhost:9901/>

```bash
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

### Reference

1. <https://github.com/jrockway/jrock.us/blob/master/ingress/envoy.yaml>
2. <https://blog.turbinelabs.io/setting-up-ssl-with-envoy-f7c5aa06a5ce>
