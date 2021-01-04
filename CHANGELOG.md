# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<a name="unreleased"></a>
## [Unreleased]


<a name="v0.1.5"></a>
## [v0.1.5] - 2021-01-03
### Build
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps

### Chore
- **deps:** update dependency webpack to v5.11.1
- **deps:** update postgres docker tag to v11.10
- **deps:** update module google.golang.org/grpc to v1.34.0
- **deps:** update docker.io/envoyproxy/envoy-alpine docker tag to v1.16.2
- **deps:** update module golang/protobuf to v1.4.3
- **deps:** update module google.golang.org/grpc to v1.33.1
- **deps:** update postgres docker tag to v11.9
- **deps:** update docker.io/envoyproxy/envoy-alpine docker tag to v1.16.0

### Feat
- **goapi:** fix gomod
- **goapi:** using improbable-eng to serve grpcweb directly
- **grpc:** now using Buf to generate protobuf code
- **proto:** upgraded proto tools and and go deps
- **workspace:** lint-staged

### Fix
- **security:** fix Security advisories


<a name="0.1.3"></a>
## [0.1.3] - 2020-10-25
### Build
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **lint:** lint gomod

### Chore
- **deps:** update docker.io/envoyproxy/envoy-alpine docker tag to v1.15.2
- **deps:** update module google.golang.org/grpc to v1.32.0
- **deps:** update module envoyproxy/protoc-gen-validate to v0.4.1
- **deps:** update module rs/zerolog to v1.20.0
- **deps:** pin dependency [@nx](https://github.com/nx)-go/nx-go to 1.2.3
- **release:** 0.1.3

### Ci
- **deps:** upgrade deps

### Docs
- **cicd:** adding github actions TODO task
- **deps:** adding update_deps download_deps release makefile actions

### Feat
- **nopasswordlogin:** try adding nopasswordlogin OpenID connect provider
- **state:** switching from [@ngrx](https://github.com/ngrx)/component to [@rx](https://github.com/rx)-angular/template

### Fix
- **deps:** pin dependency [@rx](https://github.com/rx)-angular/template to 1.0.0-beta.0
- **deps:** try to fix Dependabot alerts

### Style
- **format:** formate code
- **lint:** apply lint


<a name="libs/golib/v0.1.4"></a>
## [libs/golib/v0.1.4] - 2020-08-08

<a name="apps/goapi/v0.1.4"></a>
## [apps/goapi/v0.1.4] - 2020-08-08
### Build
- **config:** updated certs gen script
- **deploy:** poich deploy
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updared to angular 10
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated to nx 10 and angular 10
- **deps:** updated deps
- **deps:** updated deps
- **docker:** adding Dockerfile for API
- **docs:** refactor README.md
- **docs:** refactor README.md
- **docs:** refactor README.md
- **docs:** refactor README.md
- **docs:** refactor README.md
- **docs:** refactor README.md
- **docs:** refactor README.md
- **webapp:** adding compodoc builder for webapp

### Chore
- **deps:** update envoyproxy/envoy-alpine docker tag to v1.15.0
- **deps:** update docker.io/envoyproxy/envoy-alpine docker tag to v1.15.0
- **deps:** update micro/micro docker tag to v2.9.3
- **deps:** update envoyproxy/envoy-alpine docker tag to v1.14.3
- **deps:** pin dependencies
- **deps:** update docker.io/envoyproxy/envoy-alpine docker tag to v1.14.3
- **deps:** pin dependencies
- **deps:** update envoyproxy/envoy-alpine docker tag to v1.14.2
- **deps:** pin dependencies
- **deps:** update dependency [@types](https://github.com/types)/helmet to v0.0.47
- **deps:** update dependency [@nguniversal](https://github.com/nguniversal)/builders to v9.1.1
- **deps:** update typescript-eslint monorepo to v2.32.0

### Feat
- **analyze:** switch to  Source Map Explorer
- **environment:** add dynamic config load feature
- **goapi:** now using gogen lib with goapi
- **golang:** adding golang api support

### Fix
- **api:** fix tls issue for REST API
- **deps:** update dependency [@nguniversal](https://github.com/nguniversal)/express-engine to v9.1.1
- **deps:** update dependency [@angular](https://github.com/angular)/flex-layout to v9.0.0-beta.30

### Refactor
- **config:** moved certs to new location

### Style
- **format:** fix format


<a name="v0.1.4"></a>
## [v0.1.4] - 2020-04-15
### Chore
- **deploy:** testing deploy
- **deploy:** updated cert path
- **hooks:** git hooks are back


<a name="v0.1.3"></a>
## [v0.1.3] - 2020-04-14
### Appctl
- added scaffolding structure for the new environment: production.
- added scaffolding structure for the new environment: staging.
- added scaffolding structure for the new environment: development.

### Build
- **deploy:** adding envoy xDS config and TLS certs
- **deps:** updated deps
- **deps:** nebular using final 5.0.0
- **deps:** updated deps

### Chore
- **actions:** testing
- **deploy:** bootstraping config
- **deploy:** bootstraping config
- **deploy:** adding appctl docs
- **deps:** updated deps
- **deps:** updated nx to 9.0.0 final
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** update deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** update dependency micro/micro to v2
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated nx to 9.0.0 final
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated deps
- **deps:** deps updated
- **deps:** deps updated
- **deps:** updated deps
- **docs:** adding Prototool
- **docs:** adding Prototool
- **eslint:** changing tslint to eslint for API module
- **firebase:** updated angular fire to 6-RC1

### Docs
- **api:** updated grpc testing with grpcurl anf Buf
- **envoy:** restructure docs for envoy
- **gitbook:** polish docs
- **gitbook:** updated doc on monorepo with shell libs
- **gitbook:** updated summary to add nx link
- **gitbook:** adding FAQ template
- **gitbook:** updated Prerequisites versions
- **gitbook:** polish monorepo.md
- **gitbook:** polish monorepo.md
- **gitbook:** adding FAQ
- **intro:** updating various docs
- **nx:** adding nx cheat sheet

### Feat
- **api:** api now support starting with TLS
- **blog:** switching to ngx-markdown
- **universal:** adding angular Universal

### Fix
- **api:** adding `hird_party/proto` into assets for build
- **blog:** moved prism-copy-to-clipboard import to last
- **deps:** pin dependency grpc to 1.24.2
- **deps:** pin dependencies
- **deps:** pin dependency ngx-markdown to 9.0.0
- **deps:** lock "[@nebular](https://github.com/nebular)/theme": "5.0.0-beta.7",
- **deps:** pin dependency [@angular](https://github.com/angular)/fire to 6.0.0-rc.1
- **grpc:** adding grpc dep

### Refactor
- **clean:** remove backup file

### Style
- **lint:** fix lint issues
- **scss:** removed 3rd party scss
- **tslint:** reorder tslint
- **tslint:** update tslint 6


<a name="0.1.2"></a>
## [0.1.2] - 2020-02-09
### Chore
- **deps:** updated [@angular](https://github.com/angular)/cdk to 9.0.0 final
- **deps:** update dependency [@types](https://github.com/types)/jest to v25.1.2
- **deps:** updated angular cli to 9.0.0 final
- **deps:** updated deps
- **deps:** updated deps
- **deps:** updated angular cli
- **deps:** updated angular to 9.0.0 final
- **deps:** updated [@angular](https://github.com/angular)/cdk 9.0.0-rc.9 -> 9.0.0-rc.10
- **docs:** cleanup
- **release:** 0.1.2
- **vscode:** adding proto3 format plugins

### Docs
- **buf:** updated docs for buf
- **gitbook:** polich docs
- **gitbook:** refactor docs

### Feat
- **makefile:** added tasks: proto gen and proto format
- **prototool:** adding prototool for generateing Go/Java/JS code

### Fix
- **makefile:** adding proto PHONY


<a name="0.1.1"></a>
## [0.1.1] - 2020-02-05
### Build
- **nrwl:** nx now can cache. try: nx build webapp
- **nrwl:** nx now can cache. try: nx build webapp

### Chore
- **deps:** updated nebular 5.0.0-beta.4
- **deps:** pin dependency cypress to 3.8.3
- **deps:** updated [@nrwl](https://github.com/nrwl)
- **deps:** updated deps
- **deps:** updated nrwl/nx to 9.0.0-beta.4
- **deps:** update angularcli monorepo
- **deps:** updated nebular -> 5.0.0-beta.5
- **deps:** updated nrwl to 8.12.2
- **deps:** update dependency ts-jest to v25.2.0
- **deps:** updated deps
- **deps:** deps updated
- **deps:** updated deps
- **deps:** updated deps
- **docs:** moved blog docs to docs/advanced
- **docs:** adding release docs
- **gitops:** polish git apps
- **guess:** guess parser test
- **release:** 0.1.1
- **release:** 0.1.0
- **scully:** testing nx loadChildren style

### Docs
- **gitbook:** polish docs
- **gitbook:** polish docs
- **gitbook:** polish docs
- **gitbook:** polish docs
- **gitbook:** adding Modules
- **gitbook:** work in progress - testing

### Feat
- **accounts:** adding new accounts lib module
- **envoy:** adding envoy grpc-web proxy
- **proto:** adding working envoy proxy config

### Fix
- **blog:** lock guess-parser version to 0.4.14 for scullyio
- **blog:** upgrade scullyio
- **deps:** pin dependency [@angular](https://github.com/angular)/flex-layout to 9.0.0-beta.28
- **deps:** update dependency [@nebular](https://github.com/nebular)/security to v5.0.0-beta.5
- **deps:** lock guess-parser[@0](https://github.com/0).4.14
- **deps:** update dependency [@nebular](https://github.com/nebular)/theme to v5.0.0-beta.5
- **deps:** update dependency [@angular](https://github.com/angular)/animations to v9.0.0-rc.11
- **proto:** adding scope dependencies for modules to enforce linting
- **proto:** adding CI for proto linting
- **proto:** adding account proto

### GitBook
- [master] 3 pages modified
- [master] 2 pages modified
- [master] 3 pages modified


<a name="0.1.0"></a>
## 0.1.0 - 2020-01-19
### Build
- **npm:** updated ng update ngx-semantic-version[@beta](https://github.com/beta)
- **tsconfig:** keep consistent with lib version es2019

### Chore
- **deps:** updated dependencies
- **deps:** lock versions
- **deps:** hooray!!! now we can use TypeScript 3.7
- **deps:** updated deps
- **deps:** updated deps
- **deps:** update dependency cypress to v3.8.2
- **deps:** update dependency ts-node to v8.6.1
- **deps:** update dependency [@scullyio](https://github.com/scullyio)/init to v0.0.13
- **deps:** update dependency husky to v4.0.6
- **deps:** adding grpc libs
- **deps:** updated deps
- **deps:** mertge changes
- **deps:** update dependency jest-preset-angular to v7.1.1
- **deps:** update dependency husky to v4.0.5
- **deps:** update dependency ts-node to v8.6.0
- **deps:** update dependency ngx-semantic-version to v2.0.0-beta.4
- **docs:** moving docs to docs
- **style:** format

### Feat
- **api:** adding first echo gRPC service
- **auth:** auth with google and github WiP
- **config:** adding AppConfig service
- **deploy:** adding firebase for hosting
- **footer:** updated footer
- **style:** adding prismjs

### Fix
- **auth:** change lazy import for admin to make it work with scully
- **blog:** workaround for https://github.com/scullyio/scully/issues/112
- **deps:** pin dependency [@ngxs](https://github.com/ngxs)-labs/select-snapshot to 1.1.0
- **deps:** update dependency firebase to v7.7.0
- **deps:** update dependency [@nestjs](https://github.com/nestjs)/swagger to v4.1.10
- **deps:** update dependency firebase to v7.6.2
- **deps:** pin dependencies
- **deps:** update dependency [@nestjs](https://github.com/nestjs)/swagger to v4.1.7
- **deps:** update dependency [@angular](https://github.com/angular)/cdk to v9.0.0-rc.8
- **deps:** pin dependencies
- **login:** home page header refresh properly after login/logout events

### Improvement
- **auth:** added nb-user icon in toolbar
- **auth:** polish
- **blog:** fix routerLink typo
- **blog:** now excluding /home/callback from SSG
- **blog:** removed background color for blogs
- **blog:** applying  style to blog preview
- **build:** remove `git add` as lint-staged 10 don't need it

### Refactor
- **blog:** polish
- **libs:** removed proto podule
- **libs:** renamed api-interfaces to gen
- **package:** refactor package.json moving some deps to optional

### Revert
- **jest:** rollback jest-preset-angular to 7.0.0

### Style
- **format:** formated code


[Unreleased]: https://github.com/xmlking/yeti/compare/v0.1.5...HEAD
[v0.1.5]: https://github.com/xmlking/yeti/compare/0.1.3...v0.1.5
[0.1.3]: https://github.com/xmlking/yeti/compare/libs/golib/v0.1.4...0.1.3
[libs/golib/v0.1.4]: https://github.com/xmlking/yeti/compare/apps/goapi/v0.1.4...libs/golib/v0.1.4
[apps/goapi/v0.1.4]: https://github.com/xmlking/yeti/compare/v0.1.4...apps/goapi/v0.1.4
[v0.1.4]: https://github.com/xmlking/yeti/compare/v0.1.3...v0.1.4
[v0.1.3]: https://github.com/xmlking/yeti/compare/0.1.2...v0.1.3
[0.1.2]: https://github.com/xmlking/yeti/compare/0.1.1...0.1.2
[0.1.1]: https://github.com/xmlking/yeti/compare/0.1.0...0.1.1
