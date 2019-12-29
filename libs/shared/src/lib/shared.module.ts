// SharedModule is imported into `layout-modules` and any feature module lazy loaded into `layout-modules`
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbListModule
} from '@nebular/theme';

@NgModule({
  imports: [CommonModule],
  exports: [
    CommonModule,
    NbContextMenuModule,
    NbIconModule,
    NbCardModule,
    NbListModule,
    NbButtonModule,
    NbInputModule,
    NbDatepickerModule
  ]
})
export class SharedModule {}
