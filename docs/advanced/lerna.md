# Lerna

```bash
lerna info
lerna ls # list all of the public packages in the current Lerna repo.
lerna changed # check which packages have changed since the last release.
lerna diff [package?] # Diff all packages or a single package since the last release.
lerna version 1.0.1 # explicit
lerna version patch # semver keyword
lerna version # select from prompt(s)
lerna publish # publish packages that have changed since the last release
lerna publish from-git     # explicitly publish packages tagged in the current commit
lerna publish from-package # explicitly publish packages where the latest version is not present in the registry
```

## Yarn

```
yarn config list
yarn config get
yarn config get init-license
```

## Reference

- <https://github.com/lerna/lerna>
