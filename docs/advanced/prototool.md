# prototool

[prototool](https://github.com/uber/prototool) is used to scaffold new **Protobuf** files and generate _Go/Java/JS_ code from it.

## Prerequisites

1. node, yarn
1. buf
1. prototool
1. clang-format
1. proto
1. protoc-gen-go
1. protoc-gen-micro
1. protoc-gen-validate
1. protoc-gen-grpc-gateway
1. protoc-gen-swagger
1. protoc-gen-grpc-java
1. ts-protoc-gen
1. Gradle

### Installation

```bash
# node/yarn is for generating javascript code
brew install node
brew install yarn
yarn global add ts-protoc-gen
yarn global add grpc-tools
# java and gradle.
sdk install java 11.0.6.hs-adpt
sdk install gradle
```

```bash
# linter/generator and tool for proto files
GO111MODULE=on go get github.com/uber/prototool/cmd/prototool@dev
# linter tool for proto files
GO111MODULE=on go get github.com/bufbuild/buf/cmd/buf
# VS Code plugin `vscode-proto3` need clang-format
brew install clang-format
# fetch protoc plugins into $GOPATH
GO111MODULE=off go get github.com/golang/protobuf/{proto,protoc-gen-go}
GO111MODULE=off go get github.com/micro/protoc-gen-micro
GO111MODULE=on go get github.com/grpc-ecosystem/grpc-gateway/{protoc-gen-grpc-gateway,protoc-gen-swagger}
# validate protoc plugin
# Installing PGV can currently only be done from source:
go get -d github.com/envoyproxy/protoc-gen-validate
cd ~/go/src/github.com/envoyproxy/protoc-gen-validate
make build
```

> Install **protoc-gen-grpc-java**

```bash
PROTOC_JAVA_GRPC_VERSION=1.27.0
OS=osx
PROTOC_PATH=/usr/local/bin
# ORIGIN=http://central.maven.org/maven2/io/grpc/protoc-gen-grpc-java
ORIGIN=https://repo1.maven.org/maven2/io/grpc/protoc-gen-grpc-java
curl -fsSL -k $ORIGIN/$PROTOC_JAVA_GRPC_VERSION/protoc-gen-grpc-java-$PROTOC_JAVA_GRPC_VERSION-$OS-x86_64.exe \
-o $PROTOC_PATH/protoc-gen-grpc-java && \
chmod a+rx $PROTOC_PATH/protoc-gen-grpc-java
```

If above step fail due to proxy, pre-compiled binaries for common platforms are available on Maven Central:

- Navigate to https://mvnrepository.com/artifact/io.grpc/protoc-gen-grpc-java
- Click into a version
- Click "Files"

## Developer Workflow

### Scaffold

> Create new `proto` file from template

```bash
prototool create proto/yeti/sumo/v1/sumo.proto
```

### Generate

> Generating _Go/Java/JS_ from _protobuf_ definitions

```bash
prototool generate proto --dry-run
prototool generate proto
prototool generate proto --debug
```
