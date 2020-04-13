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

- Utility libraries contain utilities and services.
- Data-access can contain NGXS-related code and services.
- Component libraries should contain presentational components and directives.
- Feature libraries contain business logic, application screens, routable etc.

### scoped library modules

- domain
  - `booking/domain` -- a scoped library used in single domain. contains <services,guards,interceptors,store,handlers,actions>
  - `booking/shell-web`  -- a shell library used in a single domain
  - `booking/feature-search-web` -- a feature library used in single domain. many feature libraries in a single domain
  - `booking/shared/ui` -- a shared library used in a single domain.  contains <components, pipes, directives, layouts>

- shared
  - `shared/ui` --a shared UI library <components, pipes, directives, layouts> used across applications
  - `shared/utils` --a shared universal library used across applications
  - `shared/environments` -- a shared universal library, contains environments, used across libs
  - `shared/styles` -- a shared universal library, contains `scss`, used across libs and apps
  - `shared/assets` -- a shared universal library, contains <scss,images,fonts>, used across libs and apps

- `components` -- publishable component modules, published to NPM via **Lerna**. to be used by parent project as well as outside projects.
- `core` -- core library contains <services,guards,interceptors,store,handlers,actions> used globally, only included in application modules

#### Rules

- Libraries with a broader scope (e.g., `shared/ui`) should not depend on the libraries with narrower scope (e.g., `booking/shared/ui`).
- Component libraries should only depend on other component libraries and utility libraries, but should not depend feature libraries.
