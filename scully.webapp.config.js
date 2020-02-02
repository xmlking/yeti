require('@scullyio/scully/routerPlugins/ignoredRoutePlugin')

exports.config = {
  outDir: './dist/static/apps/webapp',
  routes: {
    '/home/blog/:id':
        {type: 'contentFolder', id: {folder: './libs/blog/posts'}},
    '/home/callback': {
      type: 'ignored',
    }
  }
};
