import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../../menu';

@Component({
  selector: 'yeti-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLayoutComponent implements OnInit {
  menu = MENU_ITEMS;
  constructor() {}

  ngOnInit() {}
}
