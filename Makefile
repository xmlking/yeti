 # Usage:
 # make        	# compile all binary
 # make clean  	# remove ALL binaries and objects
 # make release  # add git TAG and push
 GITHUB_REPO_OWNER 				:= xmlking
 GITHUB_REPO_NAME 					:= yeti
 GITHUB_RELEASES_UI_URL 		:= https://github.com/$(GITHUB_REPO_OWNER)/$(GITHUB_REPO_NAME)/releases
 GITHUB_RELEASES_API_URL 	:= https://api.github.com/repos/$(GITHUB_REPO_OWNER)/$(GITHUB_REPO_NAME)/releases
 GITHUB_RELEASE_ASSET_URL	:= https://uploads.github.com/repos/$(GITHUB_REPO_OWNER)/$(GITHUB_REPO_NAME)/releases
 GITHUB_DEPLOY_API_URL			:= https://api.github.com/repos/$(GITHUB_REPO_OWNER)/$(GITHUB_REPO_NAME)/deployments
 DOCKER_REGISTRY 					:= ghcr.io
 # DOCKER_REGISTRY 					:= us.gcr.io
 DOCKER_CONTEXT_PATH 			:= $(GITHUB_REPO_OWNER)/$(GITHUB_REPO_NAME)
 # DOCKER_REGISTRY 					:= docker.io
 # DOCKER_CONTEXT_PATH 			:= xmlking
 BASE_VERSION					:= latest

 VERSION					:= $(shell git describe --tags || echo "HEAD")
 GOPATH					:= $(shell go env GOPATH)
 CODECOV_FILE 		:= build/coverage.txt
 TIMEOUT  				:= 60s
 # don't override
 GIT_TAG					:= $(shell git describe --tags --abbrev=0 --always --match "v*")
 GIT_DIRTY 			:= $(shell git status --porcelain 2> /dev/null)
 GIT_BRANCH  		:= $(shell git rev-parse --abbrev-ref HEAD)
 HAS_GOVVV				:= $(shell command -v govvv 2> /dev/null)
 HAS_PKGER				:= $(shell command -v pkger 2> /dev/null)
 HAS_KO					:= $(shell command -v ko 2> /dev/null)
 HTTPS_GIT 				:= https://github.com/$(GITHUB_REPO_OWNER)/$(GITHUB_REPO_NAME).git

 # Type of service e.g api, service, web, cmd (default: "service")
 TYPE = $(or $(word 2,$(subst -, ,$*)), service)
 override TYPES:= service
 # Target for running the action
 TARGET = $(word 1,$(subst -, ,$*))

 override VERSION_PACKAGE = $(shell go list ./internal/config)
 BUILD_FLAGS = $(shell govvv -flags -version $(VERSION) -pkg $(VERSION_PACKAGE))

 # $(warning TYPES = $(TYPE), TARGET = $(TARGET))
 # $(warning VERSION = $(VERSION), HAS_GOVVV = $(HAS_GOVVV), HAS_KO = $(HAS_KO))
 # $(warning VERSION_PACKAGE = $(VERSION_PACKAGE), BUILD_FLAGS = $(BUILD_FLAGS))

 .PHONY: all tools check_dirty clean update_dep
 .PHONY: proto proto_lint proto_breaking proto_format proto_generate proto_shared
 .PHONY: lint lint-% upgrade_deps
 .PHONY: format format-%

 all: build

################################################################################
# Target: proto                                                                #
################################################################################

proto_clean:
	@echo "Deleting generated Go files....";
	@for f in ./libs/gen/go/**/**/**/*.pb.*; do \
		echo ✓ deleting: $$f; \
		rm -f $$f; \
	done
	@for f in ./libs/gen/grpcweb/src/lib/**/**/**/*.*; do \
		echo ✓ deleting: $$f; \
		rm -f $$f; \
	done

proto_lint:
	@echo "Linting protos";
	@${GOPATH}/bin/buf lint

proto_breaking:
	@echo "Checking proto breaking changes";
	@${GOPATH}/bin/buf breaking --against '.git#branch=master'
#	@${GOPATH}/bin/buf check breaking --against "$(HTTPS_GIT)#branch=master"

# I prefer VS Code's proto plugin to format my code then prototool
proto_format: proto_lint
	@echo "Formatting protos";
	@${GOPATH}/bin/prototool format -w proto;
	@echo "✓ Proto: Formatted"

proto_check: proto_lint proto_breaking proto_format

proto_generate:
	@echo "Generating protos";
	@${GOPATH}/bin/buf generate --path proto/yeti;

proto: proto_check proto_clean proto_generate

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

upgrade_deps:
	@goup -v -m ./...

release: download_deps
	@if [ -z $(TAG) ]; then \
		echo "no  TAG. Usage: make release TAG=v0.1.1"; \
	else \
		for m in `find * -name 'go.mod' -mindepth 1 -exec dirname {} \;`; do \
			hub release create -m "$$m/${TAG} release" $$m/${TAG}; \
		done \
	fi


################################################################################
# Target: lints                                                                #
################################################################################
format:
		@echo "Formatting Go";
		@gofmt -l -w . ;
		@echo "✓ Go: Formatted"
