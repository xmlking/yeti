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

## Blog

> Blog module based [d-koppenhagen's](https://github.com/d-koppenhagen/d-koppenhagen.de) Repo.

> I am using it here for testing with nx monorepo and reporting issues.

```bash
# build angular
ng build
# build scully blog
# options  --showBrowser, --project
yarn run scully
yarn run scully --project webapp # alternative
# serve static content
yarn run lite-server

# Or do all with:
yarn run scully:all
```

```bash
# setup blog
ng g @scullyio/init:markdown --name="blog"  --source-dir="libs/blog/posts" --route="home/blog"
# create blog post from template
ng g @scullyio/init:post --name="This is my post" --target=libs/blog/posts --meta-data-file="libs/blog/blog-post-template.yaml"
```

### Deploy

Run `ng deploy` to deploy demo app to firebase.

Analyzing bundle size `yarn bundle-report`

Analyzing and Visualizing the Dependency Graph (affected modules by uncommitted changes)

`nx affected:dep-graph`
