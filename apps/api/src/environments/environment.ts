import { readFileSync } from 'fs';
import { Environment } from './ienvironment';

export const environment: Environment = {
  production: false,
  envName: 'dev',

  env: {
    LOG_LEVEL: 'debug',
    NODE_TLS_REJECT_UNAUTHORIZED: '0',
  },

  ALLOW_WHITE_LIST: ['::ffff:127.0.0.1', '::1'],

  server: {
    host: '0.0.0.0',
    domainUrl: 'http://localhost:3000',
    httpPort: 3000,
    grpcPort: 5001,
    globalPrefix: '/api',
    secure: process.env.SECURE ? true : false,
    httpsOptions: {
      key: readFileSync('config/certs/upstream-localhost-key.pem'),
      cert: readFileSync('config/certs/upstream-localhost-cert.pem'),
      ca: readFileSync('config/certs/upstream-ca-cert.pem'),
    },
  },

  database: {
    type: 'postgres',
    host: 'localhost',
    port: 31432,
    database: 'postgres',
    username: 'postgres',
    password: 'postgres321',
    // keepConnectionAlive: true,
    logging: true,
    synchronize: true,
    uuidExtension: 'pgcrypto',
  },
  auth: {
    clientId: 'ngxapi',
    // issuerExternalUrl: 'https://keycloak.traefik.k8s/auth/realms/ngx',
    // issuerExternalUrl: 'http://localhost:8080/auth/realms/ngx',
    issuerExternalUrl: 'https://accounts.google.com',
    // issuerExternalUrl: 'https://keycloak.kashmora.com/auth/realms/ngx',
    // additionalQueryStringParams:  { scope: 'openid profile email', nonce: '1234578910' }
  },
};
