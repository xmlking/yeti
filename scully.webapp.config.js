const {voidPlugin} = require('./tools/scully-plugins/void-plugin.js');

exports.config = {
  /** projectRoot is mandatory! */
  projectRoot: './apps/webapp/src/app',
  outDir: './dist/static/apps/webapp',
  routes: {
    '/home/blog/:id': {
      type: 'contentFolder',
      id: { folder: './libs/blog/posts' }
    },
    '/home/callback': {
      type: 'void',
    }
  }
};
