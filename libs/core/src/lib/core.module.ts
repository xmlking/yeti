import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { environment } from '@env/environment';
import {
  NbAuthModule,
  NbOAuth2AuthStrategy,
  NbOAuth2ResponseType
} from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';
import {
  NbDatepickerModule,
  NbDialogModule,
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
import { AuthHandler } from './handler/auth.handler';
import { CustomRouterStateSerializer } from './handler/custom-router-state.serializer';
import { RouteHandler } from './handler/route.handler';
import { AuthState } from './state/auth.state';
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
        NbOAuth2AuthStrategy.setup({
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
            success: '/dashboard'
          }
        })
      ]
    }),
    NbSecurityModule.forRoot(),
    NgxsModule.forRoot([AuthState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      // key: ['preference', 'app.installed', 'auth.isLoggedIn']
    }),
    NgxsFormPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    environment.plugins
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer
    },
    {
      provide: APP_INITIALIZER,
      useFactory: noop,
      deps: [
        // RouteHandler,
        AuthHandler
      ],
      multi: true
    }
  ]
})
export class CoreModule {
  // HINT: RouteHandler is injected here to avoid cyclic dependency! issues with APP_INITIALIZER
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
    routeHandler: RouteHandler
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
