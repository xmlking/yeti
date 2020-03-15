# blog

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test blog` to execute the unit tests.

## Generate

```bash
# generate components for `blog` Module
ng g lib blog --routing --lazy --parent-module=libs/home/src/lib/home.module.ts --tags=scope:app1 --defaults -d
ng g component containers/BlogOverview    --project=blog -d
ng g component components/BlogPreview     --project=blog -d
ng g component containers/BlogPost        --project=blog -d
ng g service services/highlight           --project=blog --skip-tests -d
ng g service services/content             --project=blog --skip-tests -d
```
