import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbActionsModule, NbLayoutModule } from '@nebular/theme';
import { AdminGuard } from '@yeti/core';
import { SharedModule } from '@yeti/shared';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminLayoutComponent } from './containers/admin-layout/admin-layout.component';
import { OverviewComponent } from './containers/overview/overview.component';

@NgModule({
  imports: [
    SharedModule,

    NbLayoutModule,
    NbActionsModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AdminGuard],
        data: { title: 'Admin', depth: 1, roles: ['ROLE_ADMIN'] },
        children: [
          {
            path: '',
            component: OverviewComponent,
            data: { title: 'Overview', depth: 2 }
          }
        ]
      }
    ])
  ],
  declarations: [AdminLayoutComponent, OverviewComponent, HeaderComponent, FooterComponent]
})
export class AdminModule {}
