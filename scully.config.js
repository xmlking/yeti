// /** load the plugin  */
// const {extraRoutesPlugin} = require('./tools/plugins/extra-plugin.js');
// /** register the plugin */
// registerPlugin('router', 'extra', extraRoutesPlugin);

exports.config = {
  /** projectRoot is mandatory! */
  projectRoot: './apps/webapp/src/app',
  /** outFolder is where the static distribution files end up */
  outFolder: './dist/scully/apps/webapp',
  routes: {
    '/home/blog/:id': {
      type: 'contentFolder',
      id: { folder: './libs/blog/posts' }
    }
  }
};
