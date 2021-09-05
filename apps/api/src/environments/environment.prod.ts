import { readFileSync } from 'fs';
import { Environment } from './ienvironment';

export const environment: Environment = {
  production: true,
  envName: 'prod',

  env: {
    NODE_TLS_REJECT_UNAUTHORIZED: '0',
  },

  server: {
    host: process.env.HOST ?? '0.0.0.0',
    domainUrl: process.env.DOMAIN_URL ?? 'http://localhost:3000',
    httpPort: process.env.HTTP_PORT ?? 3000,
    grpcPort: process.env.GRPC_PORT ?? 5001,
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
    host: process.env.TYPEORM_HOST ?? 'ngxdb-postgresql',
    port: process.env.TYPEORM_PORT ? Number(process.env.TYPEORM_PORT) : 5432,
    database: process.env.TYPEORM_DATABASE ?? 'postgres',
    username: process.env.TYPEORM_USERNAME ?? 'postgres',
    password: process.env.TYPEORM_PASSWORD ?? 'postgres321',
    keepConnectionAlive: true,
    logging: process.env.TYPEORM_LOGGING ? JSON.parse(process.env.TYPEORM_LOGGING) : false,
    synchronize: process.env.TYPEORM_SYNCHRONIZE ? JSON.parse(process.env.TYPEORM_SYNCHRONIZE) : false,
    uuidExtension: 'pgcrypto',
  },

  auth: {
    clientId: process.env.OIDC_CLIENT_ID ?? 'ngxapi',
    issuerExternalUrl: process.env.OIDC_ISSUER_EXTERNAL_URL ?? 'https://keycloak.traefik.k8s/auth/realms/ngx',
    issuerInternalUrl: process.env.OIDC_ISSUER_INTERNAL_URL ?? 'http://keycloak-headless:8080/auth/realms/ngx',
  },
};
