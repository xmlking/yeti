<p align="center">
  <!-- <img width="650" src="docs/assets/yeti.svg"> -->
  <!-- <img width="400" height="200" src="docs/assets/yeti2.jpg"> -->
  <!-- <img  height="200" src="docs/assets/yeti3.png"> -->
  <a target="_blank"  href="https://ngx-starter-kit.firebaseapp.com/">
    <img src="docs/assets/yeti4.png">
  </a>

  <br />
  YETI - Angular Starter Kit
  <br /><br />

  <a href="http://commitizen.github.io/cz-cli/">
    <img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img alt="Semantic Release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square">
  </a>
  <a href="https://renovatebot.com/">
  <img alt="Renovate dependency Status" src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg?style=flat-square">
  </a>
  <a href="https://github.com/xmlking/yeti/blob/develop/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/xmlking/yeti?style=flat-square">
  </a>

  <br />

  <a href="https://github.com/xmlking/yeti/actions?query=workflow%3ACodeQL">
  <img alt="Total alerts" src="https://github.com/xmlking/yeti/workflows/CodeQL/badge.svg"/>
  </a>
  <a href="https://lgtm.com/projects/g/xmlking/yeti/alerts/">
  <img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/xmlking/yeti.svg?logo=lgtm&logoWidth=18"/>
  </a>
  <a href="https://lgtm.com/projects/g/xmlking/yeti/context:javascript">
  <img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/xmlking/yeti.svg?logo=lgtm&logoWidth=18"/>
  </a>
</p>

---
YETI is a Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## 🚀 Quick Links

- Checkout the [Demos](https://ngx-starter-kit.firebaseapp.com/)
- Learn more in the [GitBook](https://xmlking.gitbook.io/yeti/v/develop/)
- API Docs [CompoDoc](https://xmlking.github.io/yeti/)
- Learn about updates from the [changelog](CHANGELOG.md)

## ✨ Features

## 📦 Install
```shell
git clone https://github.com/xmlking/yeti.git && cd yeti
npm i --force
# run
nx serve webapp
```
## 🔭 Development

### API

```shell
# Start API
nx serve api
# Start Envoy proxy
docker compose up envoy
```

### WebApp

```shell
## gen i18n
nx xi18n webapp
## serve
nx serve webapp --configuration=es
nx serve webapp --configuration=hi
## build
nx build webapp --configuration=hi
# You can also build the app with a specific locale:
nx build webapp --configuration=production,es
# build all
nx build --localize
nx build --prod --localize
```

### Deploy

Run `ng deploy` to deploy demo app to firebase.

Analyzing bundle size `npm bundle-report`

### Release

```shell
make update_deps
git add .
# Start release on develop branch
git flow release start v0.1.5
# on release branch
git-chglog -c .github/chglog/config.yml -o CHANGELOG.md --next-tag v0.1.5
# update `github.com/xmlking/logger` version in each `go.mod` file.
# commit all changes.
# finish release on release branch
git flow release finish
# on master branch, (gpoat = git push origin --all && git push origin --tags)
gpoat
# add git tags for sub-modules
make release TAG=v0.1.5
```

[nx-semver plugin](https://github.com/jscutlery/semver)

Independent mode

```shell
nx run my-project:version [...options]
nx affected --target version [...options]
```

Synced mode

```shell
nx run workspace:version [...options]
nx run workspace:version --version=minor --dry-run
nx run workspace:version --version=prerelease --preid=alpha --dry-run
```

### NX

```shell
# To run these tasks you run:
nx run <project-name>:<task-name>
# To run a task for all affected projects use:
nx affected --target=<task-name>
nx run <project-name>:doc
nx affect --target=doc

ng run webapp:doc
# gen meta
# node tools/scripts/metagen.mjs
npm gen:metadata

# Run Source Map Explorer
ng run webapp:analyze
```

```shell
# build goapi image
docker build -t ghcr.io/xmlking/yeti/goapi  .
```

## 🔗 Credits
