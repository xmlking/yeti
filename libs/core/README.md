# core

This library was generated with [Nx](https://nx.dev).

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

This module should contain minimal shared `Guards`, `Services` , `State` Injectables

It should not contain `Components`, `Directives` and `Pipes`. For that, use `SharedModule`

> import **CoreModule** in only **AppModule**

## Running unit tests

Run `nx test core` to execute the unit tests.
