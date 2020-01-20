import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbActionsModule, NbLayoutModule } from '@nebular/theme';
import { SharedModule } from '@yeti/shared';
import { CallbackComponent } from './components/callback/callback.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeLayoutComponent } from './containers/home-layout/home-layout.component';
import { LandingComponent } from './containers/landing/landing.component';

@NgModule({
  imports: [
    SharedModule,

    NbLayoutModule,
    NbActionsModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: HomeLayoutComponent,
        data: { title: 'Home', animation: 'home' },
        children: [
          {
            path: '',
            component: LandingComponent,
            data: { title: 'Landing', animation: 'home' }
          },
          {
            path: 'login',
            component: LoginComponent
          },
          {
            path: 'callback',
            component: CallbackComponent
          },
          {
            path: 'blog',
            // prettier-ignore
            loadChildren: () =>
            import('@yeti/blog').then(module => module.BlogModule)
            // import('../../../blog/src/lib/blog.module').then(module => module.BlogModule)
          }
        ]
      }
    ])
  ],
  // prettier-ignore
  declarations: [
    HomeLayoutComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CallbackComponent
  ]
})
export class HomeModule {}
