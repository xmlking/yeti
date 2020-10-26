import { HttpsOptions } from '@nestjs/common/interfaces/external/https-options.interface';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

/**
 * environment variables that goes into process.env
 */
export interface Env {
  // LOG_LEVEL?: LogLevel;
  [key: string]: string;
}

/**
 * Server Environment
 */
export interface Environment {
  production: boolean;
  envName: string;

  env?: Env;

  ALLOW_WHITE_LIST?: Array<string>;

  server: {
    host: string;
    domainUrl: string;
    httpPort: string | number;
    grpcPort: string | number;
    globalPrefix: string;
    secure?: boolean;
    httpsOptions?: HttpsOptions;
  };

  database: TypeOrmModuleOptions;
  auth: {
    clientId: string;
    issuerExternalUrl: string;
    issuerInternalUrl?: string;
    jwksUri?: string;
    additionalQueryStringParams?: Partial<{
      scope: string;
      nonce: string;
      audience: string;
      [key: string]: string;
    }>;
  };
}
