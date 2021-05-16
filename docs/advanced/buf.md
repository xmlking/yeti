# Buf

[Buf](https://buf.build/) is a tool for __Protobuf__ files:

- [Linter](https://buf.build/docs/lint-usage) that enforces good API design choices and structure.
- [Breaking change detector](https://buf.build/docs/breaking-usage) that enforces compatibility at the source code or wire level
- Configurable file [builder](https://buf.build/docs/build-overview) that produces [Images](https://buf.build/docs/build-images) our extension of [FileDescriptorSets](https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/descriptor.proto)

## Prerequisites

```bash
# buf: proto tool https://buf.build/docs/tour-1
brew tap bufbuild/buf
brew install buf
# or use `go get` to install Buf
GO111MODULE=on go get github.com/bufbuild/buf/cmd/buf
```

## Developer Workflow

### Info

```bash
# To list all files Buf is configured to use:
buf ls-files
# To see your currently configured lint or breaking checkers:
buf check ls-lint-checkers
buf check ls-breaking-checkers
# To see all available lint checkers independent of configuration/defaults:
 buf check ls-lint-checkers --all
```

### Build

```bash
# check
buf build -o /dev/null
buf build -o image.bin
```

### Lint

```bash
buf check lint
# We can also output errors in a format you can then copy into your buf.yaml file
buf check lint --error-format=config-ignore-yaml
# Run breaking change detection
# for dev local
buf check breaking --against-input image.bin
buf check breaking --against-input '.git#branch=master'
# for CI
export HTTPS_GIT=https://github.com/xmlking/yeti.git
buf check breaking --against-input "$(HTTPS_GIT)#branch=master"
```

### Format

```bash
make proto_format
```

### Generate

Read [gRPC on Node.js with Buf and TypeScript](https://slavovojacek.medium.com/grpc-on-node-js-with-buf-and-typescript-part-1-5aad61bab03b)

```bash
make proto
```

## Tools

### grpcurl

```bash
# To use Buf-produced FileDescriptorSets with grpcurl on the fly:
grpcurl -protoset <(buf build -o -) ...
```

### ghz

```bash
# To use Buf-produced FileDescriptorSets with ghz on the fly:
ghz --protoset <(buf build -o -) ...
```

## Reference

1. [Style Guide](https://buf.build/docs/style-guide)
1. [Buf docs](https://buf.build/docs/introduction)
1. [Buf Example](https://github.com/bufbuild/buf-example/blob/master/Makefile)
1. [Buf Schema Registry](https://buf.build/docs/roadmap)
