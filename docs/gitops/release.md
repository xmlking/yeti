# Release

Using [GitFlow](https://xmlking.gitbook.io/gitops/v/develop/getting-started/gitflow) branching model and [tools](https://xmlking.gitbook.io/gitops/v/develop/getting-started/gitflow-usage) for _Versioning_, _Semantic Release_

## standard-version

[standard-version](https://angular.schule/blog/2019-11-ngx-semantic-version)will do the following:

1. "Bump" the version in package.json
2. Update the CHANGELOG.md file
3. Commit the package.json and CHANGELOG.md files
4. Tag a new release in the git history

### standard-version commands

```bash
npm whoami
# create the initial release and create the `CHANGELOG.md`
yarn run release --first-release --dry-run
# This will tag a release without bumping the version in package.json (et al.).
# Cut a Release
yarn run release --dry-run
# create a pre-release instead of a regular one
yarn run release --prereleas --dry-run
# cut a new alpha release version
yarn run release --prerelease alpha --dry-run
# fource a version
yarn run release --release-as 1.1.0 --dry-run
```

### Developer Workflow

> versioning and release

```bash
# from develop branch start a new release branch (use next version)
git flow release start '0.1.4'
# on release branch, do any release changes e.g., generate `CompoDoc`
# then update CHANGELOG, Bump version and Commit both with:
yarn run release
# Optionally publish this release (if you have CI actions to do)
git flow release publish
# now finish release. you have to commit 3 times.
git flow release finish
# now you are back to develop. push all changes to remote
# git push origin --all && git push origin --tags
gpoat
```

> `"release": "standard-version && git push — follow-tags origin master && yarn publish"`