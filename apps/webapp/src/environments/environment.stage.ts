import { IEnvironment } from '@env/ienvironment';
import sharedEnvironment from './base';

export const environment: IEnvironment = {
  ...sharedEnvironment,
  production: true,
  envName: 'prod',

  REMOTE_CONFIG_URL: '/assets/data/ui-config.json',
  API_BASE_URL: 'https://api.kashmora.com/api',

  plugins: []
};
