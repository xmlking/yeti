import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Select, Store } from '@ngxs/store';
import { AuthState, LayoutService, Logout, UserInfo } from '@yeti/core';
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
  @Select(AuthState.userInfo) userInfo$: Observable<UserInfo>;

  userPictureOnly = false;
  currentTheme = 'default';
  userMenu = [
    { title: 'Profile', icon: 'person-outline', link: '/dashboard/profile' },
    { title: 'Settings', icon: 'settings-outline', link: '/dashboard/settings' },
    { title: 'Logout', icon: 'log-out-outline' }
  ];
  user: any;

  themes = [
    { value: 'default', name: 'Light' },
    { value: 'dark', name: 'Dark' },
    { value: 'cosmic', name: 'Cosmic' },
    { value: 'corporate', name: 'Corporate' }
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private store: Store,
    private nbMenuService: NbMenuService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.userMenuContextListener();
    this.userInfo$.pipe(untilDestroyed(this)).subscribe(user => (this.user = user));

    this.currentTheme = this.themeService.currentTheme;

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        untilDestroyed(this)
      )
      .subscribe((isLessThanXl: boolean) => {
        this.userPictureOnly = isLessThanXl;
        this.cdr.markForCheck();
      });

    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        untilDestroyed(this)
      )
      .subscribe((themeName: string) => (this.currentTheme = themeName));
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar() {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
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
