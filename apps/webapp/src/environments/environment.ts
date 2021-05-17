// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { IEnvironment } from '@env/ienvironment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
// import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import sharedEnvironment from './base';

export const environment: IEnvironment = {
  ...sharedEnvironment,
  production: false,
  envName: 'dev',

  REMOTE_CONFIG_URL: '/assets/data/ui-config.json',
  API_BASE_URL: 'http://localhost:3000/api',
  // prettier-ignore
  plugins: [
    NgxsReduxDevtoolsPluginModule.forRoot({ maxAge: 10 }),
    // NgxsLoggerPluginModule.forRoot()
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
