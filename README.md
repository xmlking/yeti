<p align="center">
  <!-- <img width="650" src="docs/assets/yeti.svg"> -->
  <!-- <img width="400" height="200" src="docs/assets/yeti2.jpg"> -->
  <!-- <img  height="200" src="docs/assets/yeti3.png"> -->
  <img src="docs/assets/logo.png">

<br />
YETI - Angular Starter Kit
<br /><br />

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Renovate dependency Status](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

<br />

[![Total alerts](https://img.shields.io/lgtm/alerts/g/xmlking/yeti.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/xmlking/yeti/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/xmlking/yeti.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/xmlking/yeti/context:javascript)
</p>

---

## 🚀 Quick Links

- Checkout the [Demos](https://ngx-starter-kit.firebaseapp.com/)
- Learn more in the [GitBook](https://xmlking.gitbook.io/yeti/v/develop/)
- API Docs [CompoDoc](https://xmlking.github.io/yeti/)
- Learn about updates from the [changelog](CHANGELOG.md)

## ✨ Features

## 📦 Install

## 🔭 Development

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
# node tools/scripts/metagen.mjs
yarn gen:metadata
```

## 🔗 Credits