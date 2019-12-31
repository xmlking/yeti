import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthResult, NbAuthService } from '@nebular/auth';
import { Store } from '@ngxs/store';
import { AuthState, LoginSuccess } from '@yeti/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'yeti-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallbackComponent implements OnInit, OnDestroy {
  // @Select(AuthState.isAuthenticated)
  // isLoggedIn$: Observable<boolean>;

  // @Select(AuthState.provider)
  // provider: Observable<string>;

  provider: string;

  private destroy$ = new Subject<void>();
  constructor(
    private authService: NbAuthService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {
    // Move me to Store
    this.provider = this.store.selectSnapshot(AuthState.provider);
    console.log('in CallbackComponent provider', this.provider);
    this.authService
      .authenticate(this.provider)
      .pipe(takeUntil(this.destroy$))
      .subscribe((authResult: NbAuthResult) => {
        if (authResult.isSuccess() && authResult.getRedirect()) {
          this.store.dispatch(
            new LoginSuccess({ token: authResult.getToken() })
          );
          this.router.navigateByUrl(authResult.getRedirect());
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
