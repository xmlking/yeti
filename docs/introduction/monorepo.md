# monorepo

Project layout, Domain driven development

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

### library module types

- Utility libraries contain utilities and services.
- Data-access can contain NGXS-related code.
- Component libraries should contain presentational components and directives.
- Feature libraries contain business logic, application screens, routable etc.

### scoped library modules

`booking/feature-search-web` -- a scoped library used in single domain
`booking/shared/ui` -- a shared library used in a single domain
`shared/ui` --a shared UI library used across applications
`shared/utils` --a shared universal library used across applications
`shared/domain` -- core library, only included in application modules

Libraries with a broader scope (e.g., `shared/ui`) should not depend on the libraries with narrower scope (e.g., `booking/shared/ui`).
Component libraries should only depend on other component libraries and utility libraries, but should not depend feature libraries.
