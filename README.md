# Yeti

This project was generated using [Nx](https://nx.dev). This project was built using [nebular](https://akveo.github.io/nebular/).

Live [Demo](https://ngx-starter-kit.firebaseapp.com/)

Docs on [GitBook](https://xmlking.gitbook.io/yeti/v/develop/)

API Docs [CompoDoc](https://xmlking.github.io/yeti/)

## TODO

- [x] i18n, Multi-Lingual Support
- [x] SSG, Static Site Generator
- [ ] SSR, Server-Side Rendering
- [x] Federated SSO, Multiple OpenID Connect(OIDC) providers.
- [ ] Google Analytics
- [x] `ng deploy` with Firebase Hosting
- [ ] Routing animations for nested routes and Blog posts
- [ ] [Storybooks](https://storybook.js.org/)
- [x] 🚫💩 — Run linters on git staged files

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

Analyzing and Visualizing the Dependency Graph (affected modules by uncommitted changes)

`nx affected:dep-graph`
