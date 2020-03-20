# What is YETI

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Renovate dependency Status](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

### Quality

[![Total alerts](https://img.shields.io/lgtm/alerts/g/xmlking/yeti.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/xmlking/yeti/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/xmlking/yeti.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/xmlking/yeti/context:javascript)

## Getting Super Powers

Live [Demo](https://ngx-starter-kit.firebaseapp.com/)

Docs on [GitBook](https://xmlking.gitbook.io/yeti/v/develop/)

API Docs [CompoDoc](https://xmlking.github.io/yeti/)

### API

```bash
# Start API
ng serve api
# Start Envoy proxy
docker-compose up envoy
```

### WebApp

```bash
## gen i18n
ng xi18n webapp
## serve
ng serve webapp --configuration=es
ng serve webapp --configuration=hi
## build
ng build webapp --configuration=hi
# You can also build the app with a specific locale:
ng build webapp --configuration=production,es
# build all
ng build --localize
ng build --prod --localize
```

### Deploy

Run `ng deploy` to deploy demo app to firebase.

Analyzing bundle size `yarn bundle-report`

### NX

```bash
# To run these tasks you run:
nx run <project-name>:<task-name>
# To run a task for all affected projects use:
nx affected --target=<task-name>
nx run <project-name>:doc
nx affect --target=doc

ng run webapp:doc
# gen meta
node tools/metagen.mjs
```
