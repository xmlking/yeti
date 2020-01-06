import { Injectable } from '@angular/core';
import { NbAuthStrategyClass, NbOAuth2AuthStrategy, NbOAuth2AuthStrategyOptions } from '@nebular/auth';

@Injectable({
  providedIn: 'root'
})
export class NbGenericOAuth2Strategy extends NbOAuth2AuthStrategy {
  static setup(options: NbOAuth2AuthStrategyOptions): [NbAuthStrategyClass, NbOAuth2AuthStrategyOptions] {
    return [NbGenericOAuth2Strategy, options];
  }
}
