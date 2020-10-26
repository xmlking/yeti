# Universal

Server-Side Rendering (SSR), Static-Site Generator (SSG) aka pre-rendering

## Setup

```bash
ng add @nguniversal/express-engine --clientProject webapp
# For a LIVE-reloading Node & browser dev-server:
ng run webapp:serve-ssr

yarn build:ssr && yarn serve:ssr

# Automatically generate static pre-rendering:
ng run webapp:prerender
ng run webapp:prerender --routes "/blog/1" --routes "/blog/2"
ng run webapp:prerender --routesFile routes.txt


```

Deploy

```bash
ng add @angular/fire
ng run webapp:prerender
ng deploy
ng deploy --preview #  preview your application locally before continuing with the deploy
# Everything should work fine.
```

## Reference

- <https://angular.io/guide/universal>
- <https://trilon.io/blog/angular-universal-v9-whats-new>
- <https://github.com/TrilonIO/angular-universal-v9>
- <https://www.ganatan.com/tutorials/server-side-rendering-with-angular-universal>
