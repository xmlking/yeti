import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSelectModule,
  NbSidebarModule
} from '@nebular/theme';
import { SharedModule } from '@yeti/shared';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardLayoutComponent } from './containers/dashboard-layout/dashboard-layout.component';
import { OverviewComponent } from './containers/overview/overview.component';

@NgModule({
  imports: [
    SharedModule,

    NbLayoutModule,
    NbSidebarModule,
    NbActionsModule,
    NbSearchModule,
    NbMenuModule,
    NbSelectModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: DashboardLayoutComponent,
        data: { title: 'Dashboard', depth: 1, roles: [] },
        children: [
          {
            path: '',
            component: OverviewComponent,
            data: { title: 'Overview' }
          }
        ]
      }
    ])
  ],
  declarations: [
    DashboardLayoutComponent,
    OverviewComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class DashboardModule {}
