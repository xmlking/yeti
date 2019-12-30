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
  ],

  auth: {
    clientId:
      '791772336084-vkt37abstm1du92ofdmhgi30vgd7t0oa.apps.googleusercontent.com',
    issuer: 'https://accounts.google.com'
  }
};
