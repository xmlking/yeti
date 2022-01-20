# nx

A subset of **nx** cli commands

Global Options:

```bash
--dry-run
--buildable # options for libs. alias is: publishable
--tags=
  domain: <shared>
  type: <app/util/ui/feature/domain-logic/shell>
  platform: <web/mobile/desktop/node/universal>
```

## Generate Commands

### Generate Modules

{% hint style='info' %}
**buildable** is alias for old **publishable**
you can always make an existing library **buildable** after the fact.

Every **buildable** library has a build task.

{% endhint %}

```bash
npm create nx-workspace yeti --preset=empty -prefix=yeti # create an empty workspace
nx g @nrwl/angular:app yeti-web-app --style=scss --prefix=yeti --routing --tags="domain:yeti,type:app,platform:web" --dry-run
nx g @nrwl/nest:app yeti-api --frontendProject=yeti-web-app --tags="domain:yeti,type:api,platform:node"

# generate share angular lib module
nx g @nrwl/angular:lib ui  --style=scss --tags="domain:shared,type:ui,platform:web"
nx g @nrwl/angular:lib knob --directory=components --buildable --style=scss  --tags="domain:shared,type:ui,platform:web"
nx g @nrwl/nest:lib <nest-lib> [--controller] [--service] [--global] [--buildable] [--tags] # generate nestjs lib module
nx g @nrwl/workspace:lib btree --directory=utils --tags="domain:shared,type:util,platform:universal" # generate share universal lib module
```

### Refactor Modules

```bash
# Move libs/my-feature-lib to libs/shared/my-feature-lib
nx g @nrwl/workspace:move --project my-feature-lib shared/my-feature-lib
nx g @nrwl/workspace:move --project api yeti-api
# Remove my-feature-lib from the workspace:
nx g @nrwl/workspace:remove my-feature-lib --dry-run
# Force removal of my-feature-lib from the workspace:
nx g @nrwl/workspace:remove my-feature-lib --forceRemove
```

### Generate Components

```bash
nx g component todos --project=ui --export # add a component to the newly created ui library
```

### Generate workspace schematics

```bash
# Generates a workspace schematic
nx g @nrwl/workspace:workspace-schematic name --dry-run
```

## Run commands

### For Single Project

```bash
# Long form
nx run todos:serve # default configuration
nx run todos:serve:production # producttion configuration
nx run todos:build
nx run todos:lint
nx run todos:e2e
nx run todos:test
nx run todos:generate-docs # run any custom command with `@nrwl/workspace:run-commands`
# short form
nx serve todos
nx serve todos --configuration=production
nx serve todos --prod
nx build todos
nx build todos --with-deps # same as `nx run-many --target=build --projects=todos --with-deps`
nx lint  todos
nx e2e   todos
nx test  todos
```

### For Multiple Projects

```bash
nx run-many --target=build --all # Run the same target for all projects.
nx run-many --target=build --all --parallel --maxParallel=8 # Run the same target for all projects in parallel.
nx run-many --target=build --projects=app1,app2 # Run the same target for selected projects.
nx run-many --target=build --projects=app1,app2 --with-deps # Run the same target for selected projects and their deps.
nx run-many --target=build --all --only-failed # Run the same target for the projects that failed last time.
nx run-many --target=build --all --prod # Any flags you pass to run-many that aren't Nx specific will be passed down to the builder.
```

### For Affected Projects

{% hint style='info' %}
The **print-affected** and **run-many** commands can be used to set up your CI to use multiple agents, while still rebuilding and retesting only what is affected.
{% endhint %}

```bash
nx affected --target=build # Run the same target for all the projects by the current code change (e.g., current Git branch).
nx affected --target=build --parallel --maxParallel=8 # Same but in parallel.
# By default, the current code change is defined as a diff between master and HEAD. You can change it as follows:
nx affected --target=build --parallel --maxParallel=8 --base=origin/development --head=$CI_BRANCH_NAME
# Running affected commands is very common, so Nx comes with a few shortcuts.
nx affected:build
nx affected:test
nx affected:lint
nx affected:e2e
# Any flags you pass to run-many that aren't Nx specific will be passed down to the builder.
nx affected --target=build --prod
```

## Other Commands

```bash
nx print-affected
nx dep-graph
nx affected:dep-graph
nx list # lists all installed and available plugins.
nx list @xmlking/nxp-ddd # see details of a plugin
nx report # prints basic information about the plugins used
# format code
nx format:check
nx format:write
# migrate
nx migrate
nx migrate next
nx migrate @nrwl/workspace@9.0.0 --from="@nrwl/workspace@8.0.0,@nrwl/node@8.0.0"
nx migrate @nrwl/workspace@9.0.0 --to="@nrwl/react@9.0.1,@nrwl/angular@9.0.1"
# Lint workspace or list of files
nx workspace-lint
```

## Reference

- <https://nx.dev/angular/cli/overview>
