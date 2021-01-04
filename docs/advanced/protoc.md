# protoc
install `protoc` and required plugins.

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


### Installation

```bash
# basics
brew install node
brew install yarn

# plugins
yarn global add grpc-tools
brew install protoc-gen-grpc-web
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

# Installing PGV can currently only be done from source:
go get -d github.com/envoyproxy/protoc-gen-validate
cd ~/go/src/github.com/envoyproxy/protoc-gen-validate
git pull
make build
```

## Reference

- <https://github.com/grpc/grpc-web/tree/master/packages/grpc-web>
- <https://github.com/stephenh/ts-proto>
- [gRPC on Node.js with Buf and TypeScript](https://slavovojacek.medium.com/grpc-on-node-js-with-buf-and-typescript-part-1-5aad61bab03b)
