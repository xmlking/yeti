import * as packageJson from '../../../../package.json';

const base = document.querySelector('base');

export default {
  appName: 'YETI',
  secret: 'SECRET',
  apiToken: 'SECRET_TOKEN',
  baseUrl: (base && base.href) || window.location.origin + '/',
  versions: {
    app: packageJson.version
  }
};
