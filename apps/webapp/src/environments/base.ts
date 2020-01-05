import * as packageJson from '../../../../package.json';

const base = document.querySelector('base');

export default {
  appName: 'YETI',
  secret: 'SECRET',
  apiToken: 'SECRET_TOKEN',
  baseUrl: (base && base.href) || window.location.origin + '/',
  versions: {
    app: packageJson.version
  },
  firebase: {
    apiKey: 'AIzaSyDtyFFR9-Xqs_zDbtYKZdwbruEYalRrDOQ',
    authDomain: 'ngx-starter-kit.web.app',
    databaseURL: 'https://ngx-starter-kit.web.app',
    projectId: 'ngx-starter-kit',
    storageBucket: 'ngx-starter-kit.web.app',
    messagingSenderId: '79676151726'
  },
  auth: {
    google: {
      clientId: '399994557022-f5p50d6oc04g49rjhu4r0o20ljujlt0f.apps.googleusercontent.com',
      clientSecret: '',
      issuer: 'https://accounts.google.com'
    },
    github: {
      clientId: 'dec64dce6b14b090b3a6',
      clientSecret: '7c25941d536ee87665d913c4cb43beaa8ba673e7',
      issuer: 'https://github.com/login'
    }
  }
};
