# API Docs

> Generating API docs

```bash
# generate docs
npx compodoc -p tsconfig.json -d dist/docs
# serve docs
npx compodoc -s -d dist/docs
```

## Publish

### Create gh-pages branch (one time)

```bash
git checkout --orphan gh-pages
# preview files to be deleted
git rm -rf --dry-run .
# actually delete the files
git rm -rf .
git push --set-upstream origin gh-pages
```

> Publish API docs GitHub's GH-Pages

```bash
git subtree push --prefix dist/docs origin gh-pages
```
