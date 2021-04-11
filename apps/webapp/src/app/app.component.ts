import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'yeti-root',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('Lifecycle methods should not be empty  @angular-eslint/no-empty-lifecycle-method');
    // this.analytics.trackPageViews();
  }
}
