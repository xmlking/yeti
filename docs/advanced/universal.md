# Universal

Server-Side Rendering (SSR), Static-Site Generator (SSG) aka pre-rendering

## Setup

```bash
ng add @nguniversal/express-engine --clientProject webapp
# For a LIVE-reloading Node & browser dev-server:
ng run <app_name>:serve-ssr
# Automatically generate static pre-rendering:
ng run <app_name>:prerender
ng run <app_name>:prerender --routes "/blog/1" --routes "/blog/2"
ng run <app_name>:prerender --routesFile routes.txt
npm run build:ssr && npm run serve:ssr
```

## Reference

- <https://trilon.io/blog/angular-universal-v9-whats-new>
- <https://github.com/TrilonIO/angular-universal-v9>
- <https://www.ganatan.com/tutorials/server-side-rendering-with-angular-universal>
