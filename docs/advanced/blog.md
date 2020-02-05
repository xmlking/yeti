# Blog

## Intro

Blog module is based on based [d-koppenhagen's](https://github.com/d-koppenhagen/d-koppenhagen.de) Repo.

I am using it here for testing with nx monorepo and reporting issues.

### Setup

```bash
# setup blog
ng g @scullyio/init:markdown --name="blog"  --source-dir="libs/blog/posts" --route="home/blog"
# create blog post from template
ng g @scullyio/init:post --name="This is my post" --target=libs/blog/posts --meta-data-file="libs/blog/blog-post-template.yaml"
```

### Build

```bash
# build angular
ng build
# build scully blog
# options  --showBrowser, --project
yarn run scully --project webapp

# kill if 'zombie' server
yarn scully killServer
```

### Run

```bash
# serve static content
yarn run lite-server
# Or do build & run with one command:
yarn run scully:all
```
