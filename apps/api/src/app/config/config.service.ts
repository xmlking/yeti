import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { environment } from '@env-api/environment';
import { Environment } from '../../environments/ienvironment';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../../../../../package.json');

@Injectable()
export class ConfigService {
  private readonly logger = new Logger(ConfigService.name);
  private readonly config = environment;

  constructor() {
    for (const [key, value] of Object.entries(environment.env ?? {})) {
      process.env[key] = value;
    }
    console.log('is prod? ', environment.production);
  }

  get(key: keyof Environment): Environment[keyof Environment] {
    return this.config[key];
  }

  getVersion(): string {
    return process.env.APP_VERSION ?? packageJson.version;
  }

  isProd(): boolean {
    return this.config.production;
  }

  getAllowWhitelist(): string[] {
    return this.config.ALLOW_WHITE_LIST ? this.config.ALLOW_WHITE_LIST : [];
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async getOpenIdConfiguration() {
    try {
      const response = await axios.get(`${this.config.auth.issuerExternalUrl}/.well-known/openid-configuration`);
      return response.data;
    } catch (err) {
      this.logger.error(
        `Unable to fetch config from ${this.config.auth.issuerExternalUrl}/.well-known/openid-configuration, \nError: ${err}`
      );
      this.logger.error('Check if OIDC Server is UP');
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getAuth() {
    return this.config.auth;
  }
}
