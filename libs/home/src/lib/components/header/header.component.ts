import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

@Component({
  selector: 'yeti-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  // @Select(AuthState.isAuthenticated)
  // isLoggedIn$: Observable<boolean>;
  user: any = {};

  constructor(private authService: NbAuthService) {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
      }
    });
  }

  ngOnInit() {}
}
