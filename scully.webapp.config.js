require('@scullyio/scully/routerPlugins/ignoredRoutePlugin')

exports.config = {
  outDir: './dist/static/apps/webapp',
  // extraRoutes: ['/exclude/present'],
  routes: {
    '/home/blog/:id':
        {type: 'contentFolder', id: {folder: './libs/blog/posts'}},
    '/home/callback': {
      type: 'ignored',
    }
  },
  //  guessParserOptions: {
  //   excludedFiles: ['libs/dashboard/src/lib/dashboard.module.ts'],
  // },
};
