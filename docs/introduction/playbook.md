# DIY Playbook

1. Install global [Prerequisites](./installation.md)

## Install

### Install Global Packages

```bash
yarn global remove lerna
yarn global remove commitizen
yarn global remove @angular/cli
yarn global remove @nrwl/cli
yarn global remove @nestjs/cli
yarn global remove grpc-tools
yarn global remove ts-protoc-gen
yarn global remove bloomrpc-mock

yarn global add lerna
yarn global add commitizen
yarn global add @angular/cli
yarn global add @nrwl/cli
yarn global add @nestjs/cli
yarn global add grpc-tools
yarn global add ts-protoc-gen
yarn global add bloomrpc-mock



# verify globally installed packages
yarn global list
# find out which packages need to be updated. Options: `--latest`
yarn global upgrade-interactive
# set scss as default css processor
ng config -g defaults.style=scss
ng config -g schematics.@schematics/angular:component.style scss
ng config -g cli.packageManager yarn
# (optional) set scss as default style for ngx-formly
ng config -g schematics@ngx-formly/schematics:component.style scss
# check your global defaults
ng config -g
# (optional) how to find reverse dependencies for a package?
yarn why jasmine-marbles
```

### Install Chrome Extensions

1. [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
2. [Angular Tracer for View Updates](https://chrome.google.com/webstore/detail/angular-tracer-for-view-u/bdneljfoigfojeenmmgahnkjnkpbellg)

## Scaffold Project

> steps below are for setting up a new project from the scratch.

for nx help `yarn run help`

> Explicitly Passing Arguments to Angular CLI

`nx/ng` commands now accept a delimiter to distinguish the end of options for `Nx` and the beginning of options to `Angular CLI` with a (like npm run) according to Guideline 10 of `POSIX.2 utility syntax guidelines`.

`yarn affected -- --target lint --uncommitted --parallel -- --fix`

### Create Workspace

```bash
ng new yeti -c=@nrwl/workspace --preset=empty --style=scss --npm-scope=yeti --app-name=yeti -v

cd yeti

# set yarn2 for project
# yarn set version berry

# make sure we are up-to-date
ng update --all  --allow-dirty --force
# also update versions in package.json
yarn upgrade-interactive --latest

# add nx plugins (schematics)
#  you can add more nrwl-nx plugins to your workspace as needed
ng add @nrwl/angular --defaults
ng add @nrwl/nest
ng add @xmlking/nxp-ddd

# Set workspace defaults
ng config cli.packageManager yarn
ng config schematics.@schematics/angular:component.style scss
ng config schematics.@schematics/angular:component.prefix yeti
ng config schematics.@schematics/angular:component.displayBlock true # optional, default `inline`
ng config schematics.@schematics/angular:component.changeDetection OnPush

TODO: move assets and styles to shated
https://github.com/nrwl/nx-examples/tree/master/libs/shared # assets
https://github.com/LayZeeDK/ngx-nrwl-airlines-workspace/tree/master/libs/shared # Env

# generate webapp app
# use fullTemplateTypeCheck or strictTemplates
# ng g @nrwl/angular:app yeti-web-app --routing --style=scss --strict=true --tags="domain:yeti,type:app,platform:web"
ng g @xmlking/nxp-ddd:application yeti # optional flags: --platform <web/mobile/desktop/node>

# NOTE: Remove `"types": []` from apps/webapp/tsconfig.app.json to allow global types. ???

# generate api app with nestjs
ng g @nrwl/nest:app yeti-api --frontend-project=yeti-app --linter=eslint --tags="domain:yeti,type:api,platform:node"
```

### Dependencies

> adding 3rd party modules/libs

```bash
cd yeti
#---------------------------
# Add i18n
ng add @angular/localize
#---------------------------
# Add PWA
ng add @angular/pwa@next --project webapp
#---------------------------
# Add universal for SSR
ng add @nguniversal/express-engine --clientProject webapp
#---------------------------
# `ng deploy`
# Add architect for deploying webapp
# ng add [provider] [angular-cli-ghpages, @angular/fire, @zeit/ng-deploy, @azure/ng-deploy, @netlify-builder/deploy]
# gh-pages deployment
# ng add angular-cli-ghpages
# firebase deploy
# https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md
ng add @angular/fire # Note: add this, only after adding `@nguniversal/express-engine`
# (optional) Add architect for npm release
ng add ngx-deploy-npm
#---------------------------
# Add ngx-semantic-version (http://d-koppenhagen.de/blog/2019-11-ngx-semantic-version)
ng add ngx-semantic-version
#---------------------------
# Add nebular
ng add @nebular/theme
yarn add @nebular/auth
yarn add @nebular/security
yarn add -D @fortawesome/fontawesome-free
#---------------------------------

#---------------------------------
# compo docs
ng add @twittwer/compodoc
# adds a `compodoc` target to the specified project in your `angular.json`
ng g @twittwer/compodoc:config <project> [options]
ng g @twittwer/compodoc:config webapp --workspaceDocs
# Generate your docs:
ng run <project>:compodoc
ng run webapp:compodoc
#---------------------------------

# Add ngx-markdown for SSG(Static Site Generator) and Content Management
ng add ngx-markdown
yarn add prismjs
#---------------------------
# Add Flex-Layout
yarn add @angular/flex-layout
#---------------------------
# (optional) Add in-memory-web-api
yarn add angular-in-memory-web-api
#---------------------------------
# Add NGXS manually (prefered)
# We are using NGXS for State Management and [@rx-angular/template](https://github.com/rx-angular/rx-angular/blob/master/libs/template/README.md) for zoneless Rendering System
yarn add @ngxs/devtools-plugin @ngxs/{store,router-plugin,form-plugin,storage-plugin,devtools-plugin}
#  (optional) extra ngxs plugins
yarn add @ngxs-labs/immer-adapter
yarn add @ngxs-labs/select-snapshot
yarn add immer
# add `Push Pipe` & `Let Directive` Rendering System
yarn add @rx-angular/template
#---------------------------------
# (optional) Add formly
ng add @ngx-formly/schematics --ui-theme=material
#---------------------------------
#  (optional) Add Filepond
yarn add ngx-filepond \
filepond-plugin-file-encode \
filepond-plugin-file-validate-size \
filepond-plugin-file-validate-type \
filepond-plugin-image-crop \
filepond-plugin-image-preview
#---------------------------------
# Add @UntilDestroy() to auto unsubscribe rxjs
yarn add @ngneat/until-destroy
#---------------------------------
# Add gRPC
yarn add google-protobuf
yarn add -D @types/google-protobuf
yarn add grpc-web
# to generate TS interfaces from proto
yarn add -O ts-proto
#---------------------------------
# for metagen CLI tool (node tools/scripts/metagen.mjs)
yarn add -O parse-md

# (optional) Add Socket.io
yarn add socket.io-client
yarn add -D @types/socket.io-client

#---------------------------------
ng add @ngneat/dialog
#---------------------------------

# Add miscellaneous
yarn add ngx-perfect-scrollbar smooth-scrollbar ngx-page-scroll screenfull

# Add Dev Tools
# tools you needed in CI/CD inv
yarn add -D loaders.css
yarn add -D api-ai-javascript
yarn add -D codecov
yarn add -D rimraf

# install without saving
yarn add trianglify --no-save --no-lock

#---------------------------------
## bundle analyzer
# yarn add -O webpack-bundle-analyzer
ng add @ngx-builders/analyze
yarn global add source-map-explore # will be removed later
# usage
ng run [YOUR_PROJECT_NAME]:analyze --no-build

# old way
yarn add source-map-explore
ng build --prod --sourceMap
npx  source-map-explore dist/**/main*2015*js
#---------------------------------

### Add Optional Tools
# tools you only needed on Dev laptop
yarn add -O lint-staged
# alternative builder for nestjs (optional)
yarn add -D ts-node-builder

yarn workspace @yeti/api add  @xmlking/jwks-rsa @nestjsx/crud @nestjs/{terminus,cqrs,passport,swagger,microservices,typeorm}
yarn workspace @yeti/api add nodemon supertest  -O
yarn workspace @yeti/api add @types/{helmet,passport,passport-jwt,supertest,nodemailer} -D

yarn workspace @yeti/api add @grpc/proto-loader
yarn workspace @yeti/api add grpc

yarn workspace @yeti/tools add cpx --dev
```

> update 3rd party modules/schematics
> use `--allow-dirty` `--next` --force` flags as needed

```bash
ng update
# ng update --next if needed
ng update @angular/core
ng update @angular/cli
ng update @angular/material
ng update @angular/pwa
ng update @ngx-formly/schematics --ui-theme=material
ng update @nrwl/workspace
ng update @nrwl/angular
ng update @nrwl/nest
ng update @nguniversal/express-engine
```

## Tasks

### Install Deps

```bash
yarn
```

### Update Deps

```bash
ng update
ng update @angular/cli
ng update @angular/core
ng update --all
# interactively update non-ng modules, with `--latest`
# this will also update package.json file with information of the new versions of the updated packages
yarn upgrade-interactive --latest
```

### Build

```bash
# Create a translation source file
ng xi18n --output-path apps/webapp/src/local

ng build api
# start with hugh memory if ndded
NODE_OPTIONS=--max-old-space-size=4096 ng build api --prod
NODE_OPTIONS=--max-old-space-size=4096 ng build webapp --prod
```

### Run

```bash
# dev run
ng serve
# run mock mode
ng serve -c=mock
# use proxy (if you have CORS disabled backend API)
ng serve -c=mock --proxy-config proxy.conf.js
# to bind to host IP, to demo from laptop
ng s --host
# ES2015 support: Set tsconfig.json target value as "es2015" and  use --aot
ng serve -c=mock
# run prod mode
ng serve -c=prod

# build and run web
docker-compose up --build web
# run web
docker-compose up web
```

### Uint Test

```bash
ng test <module>
```

### E2E Test

```bash
ng e2e webapp
# headless tests (CI)
ng e2e webapp --headless
ng e2e webapp --headless --browser chrome
# Production target
ng e2e webapp --prod
# Watching for changes
ng e2e webapp --watch
```

### Serve from dist

> use this to test service-workers

```bash
# 1st terminal - Start the build in (optional) watch mode
ng build --prod --watch
# 2nd in terminal - Start the static web server. this will use config from bs-config.json
npx lite-server
```

### Check

> check if you on current versions.

```bash
node -v
yarn -v
lerna -v
ng -v
npx nx --version
nest info
# list workspaces
yarn workspaces info
```

### IntelliJ/WebStorm

Right click on `apps/webapp/src/styles` in project vie --> Make Directory as --> Resources Root.
Right click on `apps/webapp/src` in project vie --> Make Directory as --> Resources Root.
Right click on `docs` in project view --> Make Directory as --> Excluded.
Right click on `dist` in project view --> Make Directory as --> Excluded.
Right click on `coverage` in project view --> Make Directory as --> Excluded.

## Reference

- [Nx and Angular CLI](https://github.com/nrwl/nx/wiki/Nx-and-Angular-CLI)
- [NPM vs Yarn Cheat Sheet](https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc)
