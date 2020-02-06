import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountsGridComponent } from './containers/accounts-grid/accounts-grid.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', redirectTo: 'grid', pathMatch: 'full' },
      {
        path: 'grid',
        component: AccountsGridComponent,
        data: { title: 'Accounts Grid', depth: 2 }
      }
    ])
  ],
  declarations: [AccountsGridComponent]
})
export class AccountsModule {}
