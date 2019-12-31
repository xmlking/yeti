import { Injectable } from '@angular/core';
import {
  NbAuthStrategyClass,
  NbOAuth2AuthStrategy,
  NbOAuth2AuthStrategyOptions
} from '@nebular/auth';

@Injectable({
  providedIn: 'root'
})
export class NbGoogleOAuth2Strategy extends NbOAuth2AuthStrategy {
  static setup(
    options: NbOAuth2AuthStrategyOptions
  ): [NbAuthStrategyClass, NbOAuth2AuthStrategyOptions] {
    return [NbGoogleOAuth2Strategy, options];
  }
}
