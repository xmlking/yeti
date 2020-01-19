import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'yeti-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
