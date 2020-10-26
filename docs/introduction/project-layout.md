# Project Layout

Project layout, Domain driven development, Single Responsibility Principle

## Project structure

```
happynrwl/
├── apps/
├── libs/
│   ├── happynrwlapp/
│   │    ├── registration/
│   │    │   ├── feature-main/
│   │    │   ├── feature-login/
│   │    │   ├── ui-form/
│   │    │   └── utils-testing/
│   │    ├── search/
│   │    │   ├── feature-results/
│   │    │   └── utils-testing/
│   │    └── shared/
│   │        └── ui/
│   ├── adminapp/
|   └── shared/
│       ├── ui/
│       └── utils-testing/
├── tools/
├── workspace.json
├── nx.json
├── package.json
└── tsconfig.json
```

### application module types

- `yeti-web-app` yeti web app
- `yeti-web-app-e2e` yeti web app e2e testing
- `yeti-mobile-app` mobile version of yeti app
- `yeti-desktop-app` desktop version of yeti app
- `yeti-api` yeti backend API

{% hint style='info' %}
The **app.module** is almost the same for the Web, Mobile and Desktop applications.
It only imports the **feature-shell** and performs platform-specific configurations.
{% endhint %}

### library module types

- workspace libraries, and package libraries(has package.json)
  - workspace libraries are used only within the workspace.
  - package libraries are **publishable** to NPM and can be used outside its workspace.
- Utility libraries contain utilities and services.
- Data-access can contain NGXS-related code and services.
- Component libraries should contain presentational components and directives.
- Feature libraries contain business logic, application screens, routable etc.

### scoped library modules

- domain
  - `booking/data-access` -- a scoped library used in single domain. contains <services,guards,interceptors,store,handlers,actions>
  - `booking/shell-<web/mobile...>`  -- shell libraries used in a single domain. can have many shell libraries in a single domain
  - `booking/feature-search-<web/mobile...>` -- feature libraries used in single domain. can have many feature modules in a single domain
  - `booking/shared/ui` -- a shared library used by multiple feature modules in a single domain.  contains <components, pipes, directives, layouts>

- shared
  - `shared/feature-<something>` -- shared feature modules used in multiple domains. Can have many feature modules in `shared` domain
  - `shared/data-access` -- a shared `type=angular` library, contains  <services,guards,interceptors,store,handlers,actions>, used across libs
  - `shared/environments` -- a shared `type=angular` library, contains environments, used across libs
  - `shared/scss` -- a shared `type=universal` library, contains `scss`, used across libs and apps
  - `shared/assets` -- a shared `type=universal` library, contains static  non-TypeScript assets e.g., <css,images,fonts>, used across libs and apps
  - `shared/ui` --a shared UI library <components, pipes, directives, layouts> used across applications
  - `shared/utils` --a shared `type=universal` libraries used across applications. e.g., data structures , algorithms

- nestjs - contains `nestjs` shared and feature modules
  - `nestjs/config` -- config module
  - `nestjs/environments` -- a shared universal library, contains environments, used across libs

- `components` -- publishable component modules, published to NPM via **Lerna**. to be used by parent project as well as outside projects. modules here contains `package.json`

- `core` -- core library contains <services,guards,interceptors,store,handlers,actions> used globally, only included in application modules

#### Rules

- Libraries with a broader scope (e.g., `shared/ui`) should not depend on the libraries with narrower scope (e.g., `booking/shared/ui`).
- Component libraries should only depend on other component libraries and utility libraries, but should not depend feature libraries.

#### Info

- The shell component is the entry point component of our **layout** and **features**. Every additional route is added to the **children** array of the shell component route. Additional routes will be rendered by the router outlet in the shell component template.
