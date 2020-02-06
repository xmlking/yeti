import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { IEnvironment } from '@env/ienvironment';

/**
 *  In Components, inject `AppConfigService` and usage:
 *  this.isShowingFeatureA = appConfig.config.featureFlags[ 'feature-a' ];
 */
@Injectable({
  // providedIn: 'platform'
  providedIn: 'root'
})
export class AppConfigService {
  private configUrl = environment.REMOTE_CONFIG_URL;
  private configPrivate: IEnvironment = environment;

  constructor(private http: HttpClient) {}

  async load(configUrl = this.configUrl) {
    try {
      // prettier-ignore
      const remoteConfig = await this.http
        .get<IEnvironment>(configUrl)
        .toPromise();
      this.configPrivate = { ...environment, ...remoteConfig };
    } catch {
      console.error(`Unable to load remote config url ${configUrl}`);
    }
  }
  get config() {
    return this.configPrivate;
  }
}
