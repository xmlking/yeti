import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LayoutService } from '@yeti/core';

@UntilDestroy()
@Component({
  selector: 'yeti-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent implements OnInit {
  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.layoutService
      .onChangeLayoutSize()
      .pipe(untilDestroyed(this))
      .subscribe(() => this.resizeChart());
  }

  resizeChart() {
    console.log('resize me');
  }
}
