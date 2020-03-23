# DIY Playbook

1. Install global [Prerequisites](./Installation.md)

#### Install Global Packages

```bash
yarn global remove lerna
yarn global remove @angular/cli
yarn global remove @nrwl/cli
yarn global remove @nestjs/cli
yarn global remove bloomrpc-mock
yarn global remove gitbook-cli
yarn global remove ts-protoc-gen
yarn global remove grpc-tools

yarn global add lerna
yarn global add @angular/cli
yarn global add @nrwl/cli
yarn global add @nestjs/cli
yarn global add bloomrpc-mock
yarn global add gitbook-cli
yarn global add ts-protoc-gen
yarn global add grpc-tools


# verify globally installed packages
yarn global list
# find out which packages need to be updated. Options: `--latest`
yarn global upgrade-interactive
# set scss as default css processor
ng config -g defaults.style=scss
ng config -g schematics.@schematics/angular:component.style scss
ng config -g cli.packageManager yarn
# set scss as default style for ngx-formly
ng config -g schematics@ngx-formly/schematics:component.style scss
# check your global defaults
ng config -g
# find reverse dependencies for a package
yarn why jasmine-marbles
```

#### Install Chrome Extensions

1. [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
2. [Angular Tracer for View Updates](https://chrome.google.com/webstore/detail/angular-tracer-for-view-u/bdneljfoigfojeenmmgahnkjnkpbellg)

### Scaffold Project

> steps below are for setting up a new project from the scratch.

for nx help `yarn run help`

> Explicitly Passing Arguments to Angular CLI

`nx/ng` commands now accept a delimiter to distinguish the end of options for `Nx` and the beginning of options to `Angular CLI` with a (like npm run) according to Guideline 10 of `POSIX.2 utility syntax guidelines`.

`yarn affected -- --target lint --uncommitted --parallel -- --fix`

#### Create Workspace

```bash
# ng new yeti --collection=@nrwl/workspace --preset="angular" --appName="webapp" --style="scss" --cli=nx --npmScope="yeti" --interactive

# create-nx-workspace yeti --preset="angular" --appName="webapp" --style="scss" --cli=nx --interactive

# create workspace Ref: https://nx.dev/tutorial/01-create-application
# Options: --bazel  --verbose --strict
ng new ngx-starter-kit --collection=@nrwl/workspace --npm-scope=ngx-starter-kit --preset=empty \
--style=scss --package-manager=yarn --strict --verbose --skipInstall
cd ngx-starter-kit

# set yarn2 for project
# yarn set version berry

# Set workspace defaults
ng config cli.packageManager yarn
ng config schematics.@schematics/angular:component.style scss
ng config schematics.@schematics/angular:component.prefix yeti
ng config schematics.@schematics/angular:component.changeDetection OnPush

# make sure we are up-to-date
ng update --next

# and update as suggested. e.g.,
ng update @angular/cli --next
ng update @nrwl/workspace --next
# or update all
ng update --all

# also run `yarn outdated` and update versions in package.json then run `yarn install`
yarn add --dev @nrwl/angular@next --defaults
yarn add --dev @nrwl/nest@next


# generate webapp app
ng g @nrwl/angular:app webapp --routing --style=scss  --tags=app-module

# NOTE: Remove `"types": []` from apps/webapp/tsconfig.app.json to allow global types.

# generate micro-app `chat-box` (optional)
ng g @nrwl/web:app chatApp --routing --style=scss  --tags=micro-app-module -d
ng add ngx-build-plus --project chat-box
ng add @angular/elements --project chat-box ?
yarn add @webcomponents/custom-elements ?

# generate api app with nestjs
ng g @nrwl/nest:app api --frontendProject=webapp --tags=api-module
```

#### Add nx plugins

Below are some nx plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

#### Dependencies

> adding 3rd party modules/libs

```bash
cd ngx-starter-kit

# Add i18n
ng add @angular/localize
# Add PWA
ng add @angular/pwa@next --project webapp

# `ng deploy`
# Add architect for deploying webapp
# ng add [provider] [angular-cli-ghpages, @angular/fire, @zeit/ng-deploy, @azure/ng-deploy, @netlify-builder/deploy]
# gh-pages deployment
# ng add angular-cli-ghpages
# firebase deploy
# https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md
ng add @angular/fire
# Add architect for npm release
ng add ngx-deploy-npm
# Add ngx-semantic-version (http://d-koppenhagen.de/blog/2019-11-ngx-semantic-version)
ng add ngx-semantic-version
#---------------------------
# Add nebular
ng add @nebular/theme@next
yarn add @nebular/auth@next
yarn add @nebular/security@next
yarn add -D @fortawesome/fontawesome-free
#---------------------------------
# Add ngx-markdown for SSG(Static Site Generator) and Content Management
ng add ngx-markdown
yarn add prismjs
# Add universal for SSR
ng add @nguniversal/express-engine@next
#---------------------------

# Use either above nebular or below Material
#  Add Material
# Ref: https://material.angular.io/guide/schematics
# Ref: https://material.angular.io/guide/getting-started
#---------------------------------
ng add @angular/material
yarn add date-fns
# Add Flex-Layout
yarn add @angular/flex-layout
# Add in-memory-web-api
yarn add angular-in-memory-web-api
#---------------------------------
# Add NGXS manually (prefered)
yarn add @ngxs/devtools-plugin @ngxs/{store,router-plugin,form-plugin,storage-plugin,devtools-plugin}
# Or Add NGXS Automatically
ng add @ngxs/schematics # makesure "defaultCollection" is set back to "@nrwl/schematics" in angular.json

yarn add @ngxs-labs/immer-adapter
yarn add @ngxs-labs/select-snapshot
yarn add immer
#---------------------------------

# Add formly
ng add @ngx-formly/schematics --ui-theme=material

#---------------------------------
# Add Filepond
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

# Add Socket.io
yarn add socket.io-client
yarn add -D @types/socket.io-client

# add lite-server to test PWA locally
yarn add -D lite-server

# Add miscellaneous
yarn add ngx-perfect-scrollbar smooth-scrollbar ngx-page-scroll screenfull

# Add Dev Tools
# tools you needed in CI/CD inv
yarn add -D loaders.css
yarn add -D api-ai-javascript
yarn add -D @compodoc/compodoc
yarn add -D codecov
yarn add -D rimraf

# install without saving
yarn add trianglify --no-save --no-lock

# Add Optional Tools
# tools you only needed on Dev laptop
yarn add -O lint-staged
yarn add -O webpack-bundle-analyzer
yarn add -O prettier

# alternative builder for nestjs (optional)
yarn add -D ts-node-builder

yarn workspace @yeti/api add  @xmlking/jwks-rsa @nestjsx/crud @nestjs/{terminus,cqrs,passport,swagger}
yarn workspace @yeti/api add nodemon supertest  -O
yarn workspace @yeti/api add @types/{helmet,passport,passport-jwt,supertest,nodemailer} -D

yarn workspace @yeti/api add @grpc/proto-loader

yarn workspace @yeti/tools add cpx --dev
```

> update 3rd party modules/schematics

> use `--allow-dirty` `--next` --force` flags as needed

```bash
ng update
# ng update --next
ng update @angular/core --next
ng update @angular/cli --next
ng update @angular/material --force
ng update @angular/pwa --next
ng update @ngx-formly/schematics --ui-theme=material
ng update @nrwl/workspace --next --force
ng update @nrwl/angular --allow-dirty
ng update @nrwl/nest --next
ng update @nguniversal/express-engine —-next
```


### Install

```bash
yarn
```

### Update

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

### Production build and deployment

The prod image serves the minified app (sources compiles with a minimal set of dependencies), via an Nginx server.
It is self-contained, and can therefore be pushed to a Docker registry to be deployed somewhere else easily.

To start the container, use:

```bash
docker-compose up web   # optional: --build, see below
```

Now open your browser at `http://localhost:80`

### IntelliJ/WebStorm

Right click on `apps/webapp/src/styles` in project vie --> Make Directory as --> Resources Root.
Right click on `apps/webapp/src` in project vie --> Make Directory as --> Resources Root.
Right click on `docs` in project view --> Make Directory as --> Excluded.
Right click on `dist` in project view --> Make Directory as --> Excluded.
Right click on `coverage` in project view --> Make Directory as --> Excluded.

### Reference

- [Nx and Angular CLI](https://github.com/nrwl/nx/wiki/Nx-and-Angular-CLI)
- [NPM vs Yarn Cheat Sheet](https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc)
