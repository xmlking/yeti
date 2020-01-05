import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthGuard, CoreModule } from '@yeti/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        {
          path: 'home',
          loadChildren: () =>
            // import('@yeti/home').then(module => module.HomeModule),
            import('../../../../libs/home/src/lib/home.module').then(module => module.HomeModule),
          data: { preload: true }
        },
        {
          path: 'dashboard',
          canActivate: [AuthGuard],
          loadChildren: () =>
            // import('@yeti/dashboard').then(module => module.DashboardModule),
            import('../../../../libs/dashboard/src/lib/dashboard.module').then(module => module.DashboardModule),
          data: { preload: false }
        },
        {
          path: 'admin',
          canActivate: [AuthGuard],
          loadChildren: () => import('@yeti/admin').then(module => module.AdminModule),
          data: { preload: false }
        },
        {
          path: '404',
          loadChildren: () =>
            // import('@yeti/not-found').then(module => module.NotFoundModule),
            import('../../../../libs/not-found/src/lib/not-found.module').then(module => module.NotFoundModule),
          data: { title: '404', preload: false }
        },
        // 404 should be last
        { path: '**', redirectTo: '404', pathMatch: 'full' }
      ],
      { initialNavigation: 'enabled' }
    ),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    CoreModule // IMP: Please keep CoreModule after RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
