require("@scullyio/scully/routerPlugins/ignoredRoutePlugin")

exports.config = {
  // TODO: Remove projectRoot
  projectRoot: './apps/webapp/tsconfig.app.json',
  outDir: './dist/static/apps/webapp',
  routes: {
    '/home/blog/:id': {
      type: 'contentFolder',
      id: { folder: './libs/blog/posts' }
    },
    '/home/callback': {
      type: 'ignored',
    }
  }
};
