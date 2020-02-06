import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Select, Store } from '@ngxs/store';
import { AuthState, Logout, UserInfo } from '@yeti/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'yeti-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Select(AuthState.isLoggedIn) isLoggedIn$: Observable<boolean>;
  @Select(AuthState.userInfo) userInfo$: Observable<UserInfo>;

  userMenu = [
    { title: 'Login', icon: 'log-in-outline', link: '/home/login' },
    { title: 'Logout', icon: 'log-out-outline' }
  ];
  user: any;

  constructor(private store: Store, private cdr: ChangeDetectorRef, private nbMenuService: NbMenuService) {}

  ngOnInit() {
    this.userMenuContextListener();
    this.userInfo$.pipe(untilDestroyed(this)).subscribe(user => (this.user = user));
    this.isLoggedIn$.pipe(untilDestroyed(this)).subscribe(authenticated => {
      if (authenticated) {
        this.userMenu = [{ title: 'Logout', icon: 'log-out-outline' }];
      } else {
        this.userMenu = [{ title: 'Login', icon: 'log-in-outline', link: '/home/login' }];
      }
      this.cdr.markForCheck();
    });
  }

  userMenuContextListener() {
    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'user-context-menu'),
        map(({ item: { title } }) => title),
        untilDestroyed(this)
      )
      .subscribe(title => {
        switch (title) {
          case 'Logout':
            this.store.dispatch(new Logout());
            break;
          default:
            console.log('userMenuContextListener title:', title);
            break;
        }
      });
  }
}
