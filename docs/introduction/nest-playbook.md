# DIY NestJS Playbook

creating NestJS project and generate nest artifacts with-in monorepo.

> An Introduction to [NestJS](https://www.joshmorony.com/an-introduction-to-nestjs-for-ionic-developers/)

## Workspace

[monorepo mode](https://docs.nestjs.com/cli/monorepo#monorepo-mode)

### Prerequisites

#### Install Global Packages

```bash
yarn global remove @nestjs/cli
yarn global add @nestjs/cli
```

### Scaffold Project

> adding code dependencies

```bash

# generate Yeti API app
# `nest generate app yeti-api`
ng g @nrwl/nest:app yeti-api --frontend-project=yeti-app --linter=eslint --tags="domain:yeti,type:api,platform:node"
# generate `config` lib
ng g @nrwl/nest:lib config  --global=true --directory=nestjs \
--controller=false --service=true --publishable=true \
--target=es2020 --tags="domain:yeti,type:api,platform:node" --dry-run # use prefix @yeti

# Add nestjs
yarn workspace @yeti/api add @nestjs/{common,core,microservices,swagger,websockets,typeorm,passport,elasticsearch}

# fastify-* are optional. use only if you want to replace express with fastify
yarn workspace @yeti/api add fastify fastify-formbody fastify-swagger

yarn workspace @yeti/api add -D @nestjs/testing
yarn workspace @yeti/api add -D @nestjs/schematics
```

> check versions

```bash
# check of nest installed
cd apps/api
nest info
```

#### Dependencies

> adding 3rd party modules/libs

```bash
yarn add pg
yarn add dotenv
yarn add helmet
yarn add web-push
yarn add nest-router
yarn add nodemailer pug
yarn add class-validator
yarn add class-transformer
yarn add passport passport-jwt @xmlking/jwks-rsa

yarn add -D rimraf nodemon tsconfig-paths ts-loader
yarn add -D jest ts-jest @types/jest supertest @types/supertest
yarn add -D @types/nodemailer
yarn add -D @types/socket.io
yarn add -D @types/passport@0.4.2 @types/passport-jwt
yarn add -D @types/web-push
yarn add -D @types/helmet
```

#### Plugins

```bash
# add https://github.com/prisma/prisma
nest add nestjs-prisma
```


#### Generate Artifacts

```bash
# scaffold echo module
nest g module     app/echo -p api --dry-run
nest g controller app/echo -p api --dry-run

# scaffold core module
nest g module app/core -d
nest g guard auth app/core -d

# scaffold shared module
nest g module app/shared -d
nest g gateway eventbus app/shared -d

# scaffold user module
nest g module app/user -d
nest g class user.entity app/user --no-spec -d
nest g controller user app -d
nest g service user app -d
nest g controller profile app/user -d
nest g service profile app/user -d
nest g class profile/profile.entity app/user --no-spec -d
nest g controller email app/user -d

# scaffold email module
nest g module app/email -d
nest g service email app/email --flat -d

# scaffold auth module
nest g module app/auth  -d
nest g class auth.exception app/auth --no-spec -d

# scaffold chat module
nest g module app/chat  -d
nest g controller chat app/chat --flat -d
nest g service chat app/chat --flat -d
nest g gateway chat app/chat --flat -d

# scaffold external module
nest g module app/external  -d
nest g controller weather app/external -d
nest g service weather app/external -d

# scaffold project module
nest g module app/project -d
nest g controller kubernetes app/project -d
nest g service kubernetes app/project -d
nest g class cluster/cluster.entity app/project --no-spec -d
nest g controller cluster app/project -d
nest g service cluster app/project -d
nest g class project.entity app/project --no-spec -d
nest g controller project app -d
nest g service project app -d

# scaffold notifications module
nest g module app/notifications -d
nest g controller notification app/notifications -d
nest g service notification app/notifications -d
nest g service  notification/push  app/notifications --flat --no-spec -d
nest g class notification/notification.entity app/notifications --no-spec -d
nest g controller subscription app/notifications  -d
nest g service subscription app/notifications -d
nest g class subscription/subscription.entity app/notifications --no-spec -d

You could also use `ng g` if you `yarn add -D @nestjs/schematics`
ng g @nestjs/schematics:module game --path app --source-root apps/api/src -d
ng g @nestjs/schematics:controller match --path app/game  --source-root apps/api/src -d
ng g @nestjs/schematics:service match --path app/game --source-root apps/api/src -d
ng g @nestjs/schematics:class match/match.entity --path app/game --source-root apps/api/src --spec -d
```

### Ref

- Awesome Nest
  - <https://github.com/juliandavidmr/awesome-nest>
- ChatBot
  - <https://github.com/adrien2p/nestjs-dialogflow>
- <https://github.com/beeman/nest-angular-nx>
- <https://github.com/cgatian/customer-portal>
- <http://blog.exceptionfound.com/index.php/2018/06/07/nestjs-basic-auth-and-sessions/>
- <https://github.com/TorinAsakura/etl-api>
