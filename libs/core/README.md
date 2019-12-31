# core

This library was generated with [Nx](https://nx.dev).

This module should contain minimal shared `Guards`, `Services` , `State` Injectables

It should not contain `Components`, `Directives` and `Pipes`. For that, use `SharedModule`

> import **CoreModule** in only **AppModule**

### Service

1. AppConfigService - loading remote config and featureFlags
2. PageTitleService - set page title from breadcrumbs
3. AnalyticsService - Google Analytics

### Stores

1. AuthState - keep track of auth state

### Handlers

1. RouteHandler - update page title and send page views to google analytics

### Interceptors

1. ErrorInterceptor - report http errors

## Running unit tests

Run `nx test core` to execute the unit tests.

### Usage

> Eva Icons

```html
<nb-icon
  icon="arrow-circle-right-outline"
  [options]="{ animation: { type: 'zoom' } }"
></nb-icon>
```

> Fontawesome icons

```html
<nb-icon icon="star" pack="fas"></nb-icon>
<nb-icon icon="arrow-alt-circle-right" pack="far"></nb-icon>
```
