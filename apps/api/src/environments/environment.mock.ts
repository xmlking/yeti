import { readFileSync } from 'fs';
import { Environment } from './ienvironment';

export const environment: Environment = {
  production: true,
  envName: 'mock',

  env: {
    NODE_TLS_REJECT_UNAUTHORIZED: '0',
  },

  server: {
    host: process.env.HOST ?? '0.0.0.0',
    domainUrl: process.env.DOMAIN_URL ?? 'http://localhost:3000',
    httpPort: process.env.HTTP_PORT ?? 3000,
    grpcPort: process.env.GRPC_PORT ?? 5000,
    globalPrefix: '/api',
    secure: process.env.SECURE ? true : false,
    httpsOptions: {
      key: readFileSync(process.env.SSL_KEY_PATH ?? '/etc/certs/upstream-key.pem'),
      cert: readFileSync(process.env.SSL_CERT_PATH ?? '/etc/certs/upstream-cert.pem'),
      ca: readFileSync(process.env.SSL_CA_PATH ?? '/etc/certs/upstream-ca-cert.pem'),
    },
  },

  database: {
    type: 'postgres',
    host: process.env.TYPEORM_HOST ?? 'localhost',
    port: process.env.TYPEORM_PORT ? Number(process.env.TYPEORM_PORT) : 31432,
    database: process.env.TYPEORM_DATABASE ?? 'postgres',
    username: process.env.TYPEORM_USERNAME ?? 'postgres',
    password: process.env.TYPEORM_PASSWORD ?? 'postgres321',
    keepConnectionAlive: true,
    logging: process.env.TYPEORM_LOGGING ? JSON.parse(process.env.TYPEORM_LOGGING) : false,
    synchronize: process.env.TYPEORM_SYNCHRONIZE ? JSON.parse(process.env.TYPEORM_SYNCHRONIZE) : false,
    uuidExtension: 'pgcrypto',
  },

  auth: {
    clientId: process.env.OIDC_CLIENT_ID ?? '791772336084-vkt37abstm1du92ofdmhgi30vgd7t0oa.apps.googleusercontent.com',
    issuerExternalUrl: process.env.OIDC_ISSUER_EXTERNAL_URL ?? 'https://accounts.google.com',
    issuerInternalUrl: process.env.OIDC_ISSUER_INTERNAL_URL ?? 'https://accounts.google.com',
    jwksUri: process.env.OIDC_JWKS_URL ?? 'https://www.googleapis.com/oauth2/v3/certs',
    additionalQueryStringParams: { scope: 'openid profile email' },
  },
};
