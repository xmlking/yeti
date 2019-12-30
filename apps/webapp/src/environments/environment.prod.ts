import { IEnvironment } from '@env/ienvironment';
import sharedEnvironment from './base';

export const environment: IEnvironment = {
  ...sharedEnvironment,
  production: true,
  envName: 'prod',

  REMOTE_CONFIG_URL: '/assets/data/ui-config.json',
  API_BASE_URL: 'https://api.kashmora.com/api',

  plugins: [],

  auth: {
    clientId:
      '791772336084-vkt37abstm1du92ofdmhgi30vgd7t0oa.apps.googleusercontent.com',
    issuer: 'https://accounts.google.com'
  }
};
