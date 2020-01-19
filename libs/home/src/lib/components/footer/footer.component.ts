import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppConfigService } from '@yeti/core';

@Component({
  selector: 'yeti-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  constructor(private appConfig: AppConfigService) {}
  envName: string;
  version: string;

  ngOnInit() {
    this.envName = this.appConfig.config?.envName ?? 'WHAT?';
    this.version = this.appConfig.config?.versions?.app ?? 'v0.0.0';
  }
}
