import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { environment } from '@env/environment';
import {
  NbAuthJWTToken,
  NbAuthModule,
  NbOAuth2GrantType,
  NbOAuth2ResponseType
} from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';
import {
  NbDatepickerModule,
  NbDialogModule,
  NbIconLibraries,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
  NbToastrModule,
  NbWindowModule
} from '@nebular/theme';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import {
  NgxsRouterPluginModule,
  RouterStateSerializer
} from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { AuthHandler } from './handlers/auth.handler';
import { CustomRouterStateSerializer } from './handlers/custom-router-state.serializer';
import { RouteHandler } from './handlers/route.handler';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AppConfigService } from './services/app-config.service';
import { NbGithubOAuth2Strategy } from './services/github-auth.strategy';
import { NbGoogleOAuth2Strategy } from './services/google-auth.strategy';
import { AuthState } from './state/auth.state';

// appConfig initializer factory function
const appConfigInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.load();
  };
};

// Noop handler for factory function
export function noop() {
  return () => {};
}

@NgModule({
  imports: [
    NbEvaIconsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbGoogleOAuth2Strategy.setup({
          // https://accounts.google.com/.well-known/openid-configuration
          name: 'google',
          clientId:
            '791772336084-vkt37abstm1du92ofdmhgi30vgd7t0oa.apps.googleusercontent.com',
          clientSecret: '',
          authorize: {
            endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
            responseType: NbOAuth2ResponseType.TOKEN,
            scope:
              'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',

            redirectUri: 'http://localhost:4200/home/callback'
          },
          redirect: {
            success: '/dashboard', // welcome page path
            failure: undefined // stay on the same page
          }
        }),
        NbGithubOAuth2Strategy.setup({
          // https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/
          name: 'github',
          clientId: 'dec64dce6b14b090b3a6',
          clientSecret: '7c25941d536ee87665d913c4cb43beaa8ba673e7',
          authorize: {
            endpoint: 'https://github.com/login/oauth/authorize',
            responseType: NbOAuth2ResponseType.CODE,
            redirectUri: 'http://localhost:4200/home/callback'
          },
          token: {
            endpoint: 'https://github.com/login/oauth/access_token',
            grantType: NbOAuth2GrantType.AUTHORIZATION_CODE,
            class: NbAuthJWTToken,
            redirectUri: 'http://localhost:4200/home/callback'
          },
          redirect: {
            success: '/dashboard', // welcome page path
            failure: undefined // stay on the same page
          }
        })
      ]
    }),
    NbSecurityModule.forRoot(),
    NgxsModule.forRoot([AuthState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: ['auth.provider', 'auth.authenticated']
      // key: ['preference', 'app.installed', 'auth.authenticated']
    }),
    NgxsFormPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    environment.plugins
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigInitializerFn,
      deps: [AppConfigService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: noop,
      deps: [
        // RouteHandler,
        AuthHandler
      ],
      multi: true
    },
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer
    }
  ]
})
export class CoreModule {
  // HINT: RouteHandler is injected here to avoid cyclic dependency! issues with APP_INITIALIZER
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
    private routeHandler: RouteHandler,
    private iconLibraries: NbIconLibraries
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
    // register fortawesome
    iconLibraries.registerFontPack('fas', {
      packClass: 'fas',
      iconClassPrefix: 'fa'
    });
    iconLibraries.registerFontPack('far', {
      packClass: 'far',
      iconClassPrefix: 'fa'
    });
  }
}
