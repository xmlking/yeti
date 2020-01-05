import { IEnvironment } from '@env/ienvironment';
import sharedEnvironment from './base';

export const environment: IEnvironment = {
  ...sharedEnvironment,
  production: true,
  envName: 'mock',

  REMOTE_CONFIG_URL: '/yeti/assets/data/ui-config.json',
  API_BASE_URL: 'https://api.kashmora.com/api',

  plugins: [
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    //   passThruUnknownUrl: true,
    //   delay: 1000
    // })
  ]
};
