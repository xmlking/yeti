// import { OidcProviderConfig } from '@ngx-starter-kit/oidc';
import { InjectionToken, ModuleWithProviders } from '@angular/core';

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface IEnvironment {
  production: boolean;
  envName: string;
  REMOTE_CONFIG_URL: string;

  // Enables use of ng.profiler.timeChangeDetection(); in browser console
  enableDebugTools?: boolean;
  logLevel?: LogLevel;

  [key: string]: any;
  plugins: ModuleWithProviders<any>[];
  featureFlags?: {
    [key: string]: boolean;
  };
}

// AppConfig Token
export const APP_CONFIG = new InjectionToken<IEnvironment>('App Config');
