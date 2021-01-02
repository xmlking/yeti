# prototool

[prototool](https://github.com/uber/prototool) is used to scaffold new **Protobuf** files and generate _Go/Java/JS_ code from it.

## Prerequisites

1. node, yarn
1. buf
1. prototool
1. clang-format
1. proto
1. protoc-gen-go
1. protoc-gen-validate
1. protoc-gen-grpc-gateway
1. protoc-gen-grpc-web
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
GO111MODULE=on go get google.golang.org/protobuf/cmd/protoc-gen-go
GO111MODULE=on go get google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.0

GO111MODULE=on go get github.com/grpc-ecosystem/grpc-gateway/{protoc-gen-grpc-gateway,protoc-gen-swagger}
```

> Installing PGV can currently only be done from source:

```bash
go get -d github.com/envoyproxy/protoc-gen-validate
cd ~/go/src/github.com/envoyproxy/protoc-gen-validate
git pull
make build
```


## Developer Workflow

### Scaffold

> Create new `proto` file from template

```bash
prototool create proto/yeti/sumo/v1/sumo.proto
```

### Generate

> Generating _Go/Java/JS_ from _protobuf_ definitions (skip for now)

```bash
prototool generate proto --dry-run
prototool generate proto
prototool generate proto --debug
```

## Reference

- <https://github.com/grpc/grpc-web/tree/master/packages/grpc-web>
- <https://github.com/stephenh/ts-proto>
