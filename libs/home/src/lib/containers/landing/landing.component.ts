import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  IdleMonitorService,
  isScullyGenerated,
  isScullyRunning
} from '@scullyio/ng-lib';

@Component({
  selector: 'yeti-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {
  currentState = isScullyRunning()
    ? 'rendering inside scully'
    : isScullyGenerated()
    ? 'Loaded from static HTML'
    : 'SPA mode';
  constructor(private idle: IdleMonitorService) {}

  ngOnInit() {}

  loginWithGoogle() {
    // this.authService.loginWithGoogle();
  }
}
