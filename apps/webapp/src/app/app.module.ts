import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthGuard, CoreModule } from '@yeti/core';
import { environment } from '@env/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        {
          path: 'home',
          // prettier-ignore
          loadChildren: () => import('@yeti/home').then(module => module.HomeModule),
          data: { preload: true },
        },
        {
          path: 'dashboard',
          canActivate: [AuthGuard],
          // prettier-ignore
          loadChildren: () => import('@yeti/dashboard').then(module => module.DashboardModule),
          data: { preload: false },
        },
        {
          path: 'admin',
          canActivate: [AuthGuard],
          // prettier-ignore
          loadChildren: () => import('@yeti/admin').then(module => module.AdminModule),
          data: { preload: false },
        },
        {
          path: '404',
          // prettier-ignore
          loadChildren: () => import('@yeti/not-found').then(module => module.NotFoundModule),
          data: { title: '404', preload: false },
        },
        // 404 should be last
        { path: '**', redirectTo: '404', pathMatch: 'full' },
      ],
      // To avoid flickering
      { initialNavigation: 'enabled', relativeLinkResolution: 'legacy' }
    ),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    CoreModule, // IMP: Please keep CoreModule after RouterModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
