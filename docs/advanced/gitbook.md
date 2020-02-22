# GitBook

__gitbook-cli__(legacy) helps to build and serve docs locally

```bash
yarn global add gitbook-cli
# GitBook will set up your book for you:
gitbook init ./docs
# In your gitbook directory you’ll now see README.md and SUMMARY.md.
# build
gitbook build ./docs
# local serve
gitbook serve ./docs
```

### Hints

> add following to `.gitignore`

```gitignore
# Book build output
_book/

# eBook build output
*.epub
*.mobi
*.pdf
```

### Reference
- https://github.com/GitbookIO/gitbook-cli
- https://github.com/GitbookIO/gitbook/blob/master/docs/setup.md