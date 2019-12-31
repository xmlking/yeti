import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { NbAuthOAuth2Token, NbAuthResult, NbAuthService } from '@nebular/auth';
import { Store } from '@ngxs/store';
import { Login, Logout } from '@yeti/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'yeti-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
  token: NbAuthOAuth2Token;

  private destroy$ = new Subject<void>();

  constructor(
    private authService: NbAuthService,
    private location: Location,
    private store: Store
  ) {}

  // https://github.com/Vallenstein/exchange_platform_frontend/blob/master/src/app/oauth/oauth2-login.component.ts
  ngOnInit() {
    this.authService
      .onTokenChange()
      .pipe(takeUntil(this.destroy$))
      .subscribe((token: NbAuthOAuth2Token) => {
        // this.token = null;
        if (token && token.isValid()) {
          this.token = token;
        }
      });
  }

  login(provider: string) {
    this.store.dispatch(new Login({ provider }));
  }

  logout() {
    this.store
      .dispatch(new Logout())
      .pipe(takeUntil(this.destroy$))
      .subscribe((authResult: NbAuthResult) => {
        console.log('authResult', authResult);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  goBack(): void {
    this.location.back();
  }
}
