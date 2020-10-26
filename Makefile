SHELL := /usr/bin/env bash -o pipefail

# This controls the location of the cache.
PROJECT := yeti
# This controls the remote HTTPS git location to compare against for breaking changes in CI.
#
# Most CI providers only clone the branch under test and to a certain depth, so when
# running buf check breaking in CI, it is generally preferable to compare against
# the remote repository directly.
#
# Basic authentication is available, see https://buf.build/docs/inputs#https for more details.
HTTPS_GIT := https://github.com/xmlking/yeti.git
# This controls the remote SSH git location to compare against for breaking changes in CI.
#
# CI providers will typically have an SSH key installed as part of your setup for both
# public and private repositories. Buf knows how to look for an SSH key at ~/.ssh/id_rsa
# and a known hosts file at ~/.ssh/known_hosts or /etc/ssh/known_hosts without any further
# configuration. We demo this with CircleCI.
#
# See https://buf.build/docs/inputs#ssh for more details.
SSH_GIT := ssh://git@github.com/bufbuild/buf-example.git
# This controls the version of buf to install and use.
BUF_VERSION := 0.7.0

### Everything below this line is meant to be static, i.e. only adjust the above variables. ###

UNAME_OS := $(shell uname -s)
UNAME_ARCH := $(shell uname -m)
# Buf will be cached to ~/.cache/buf-example.
CACHE_BASE := $(HOME)/.cache/$(PROJECT)
# This allows switching between i.e a Docker container and your local setup without overwriting.
CACHE := $(CACHE_BASE)/$(UNAME_OS)/$(UNAME_ARCH)
# The location where buf will be installed.
CACHE_BIN := $(CACHE)/bin
# Marker files are put into this directory to denote the current version of binaries that are installed.
CACHE_VERSIONS := $(CACHE)/versions

# Update the $PATH so we can use buf directly
export PATH := $(abspath $(CACHE_BIN)):$(PATH)

# BUF points to the marker file for the installed version.
#
# If BUF_VERSION is changed, the binary will be re-downloaded.
BUF := $(CACHE_VERSIONS)/buf/$(BUF_VERSION)
$(BUF):
	@rm -f $(CACHE_BIN)/buf
	@mkdir -p $(CACHE_BIN)
	curl -sSL \
		"https://github.com/bufbuild/buf/releases/download/v$(BUF_VERSION)/buf-$(UNAME_OS)-$(UNAME_ARCH)" \
		-o "$(CACHE_BIN)/buf"
	chmod +x "$(CACHE_BIN)/buf"
	@rm -rf $(dir $(BUF))
	@mkdir -p $(dir $(BUF))
	@touch $(BUF)

.DEFAULT_GOAL := local

# deps allows us to install deps without running any checks.

.PHONY: deps
deps: $(BUF)

# local is what we run when testing locally.
# This does breaking change detection against our local git repository.

.PHONY: local
local: $(BUF)
	buf check lint
	buf check breaking --against-input '.git#branch=master'

# https is what we run when testing in most CI providers.
# This does breaking change detection against our remote HTTPS git repository.

.PHONY: https
https: $(BUF)
	buf check lint
	buf check breaking --against-input "$(HTTPS_GIT)#branch=master"

# ssh is what we run when testing in CI providers that provide ssh public key authentication.
# This does breaking change detection against our remote HTTPS ssh repository.
# This is especially useful for private repositories.

.PHONY: ssh
ssh: $(BUF)
	buf check lint
	buf check breaking --against-input "$(SSH_GIT)#branch=master"

# clean deletes any files not checked in and the cache for all platforms.

.PHONY: clean
clean:
	git clean -xdf
	rm -rf $(CACHE_BASE)

# generate Go/Java/JS

.PHONY: proto
proto:
	@prototool generate proto
	@echo "✓ Proto: Go/Java/JS Generated"

# format proto files

.PHONY: proto_format
proto_format:
	@prototool format -w proto;
	@echo "✓ Proto: Formated"

################################################################################
# Target: go-mod                                                               #
################################################################################

update_deps:
	@for d in `find . -name 'go.mod' ! -path "./node_modules/*"`; do \
		pushd `dirname $$d` >/dev/null; \
		go mod verify; \
		go mod tidy; \
		popd >/dev/null; \
	done

# @for d in `find *  -name 'go.mod'`; do \

download_deps:
	@for d in `find . -name 'go.mod' ! -path "./node_modules/*"`; do \
		pushd `dirname $$d` >/dev/null; \
		rm -f go.sum; \
		go mod download; \
		popd >/dev/null; \
	done

release: download_deps
	@if [ -z $(TAG) ]; then \
		echo "no  TAG. Usage: make release TAG=v0.1.1"; \
	else \
		for m in `find * -name 'go.mod' -mindepth 1 -exec dirname {} \;`; do \
			hub release create -m "$$m/${TAG} release" $$m/${TAG}; \
		done \
	fi
