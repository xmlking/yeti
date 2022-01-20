# Blog

We are using [ScullyIO](https://github.com/scullyio/scully) __Static Site Generator__ tool to pre-render blog content.

## Intro

Blog module is based on based [d-koppenhagen's](https://github.com/d-koppenhagen/d-koppenhagen.de) Repo.

I am using it here for testing with nx monorepo and reporting issues.

### Setup

```bash
# First time blog CMS setup
ng g @scullyio/init:markdown --name="blog" --slug=id --source-dir="libs/blog/posts" --route="home/blog"  -d
# create blog post from template
ng g @scullyio/init:post --name="This is my post" --target=libs/blog/posts --meta-data-file="libs/blog/blog-post-template.yaml" -d
```

### Build

```bash
# build angular
ng build
# build scully blog
# options  --showBrowser, --project
npm run scully --project webapp

# kill if 'zombie' server
npm scully killServer
```

### Run

```bash
# serve static content
npm run lite-server
# Or do build & run with one command:
npm run scully:all
```
