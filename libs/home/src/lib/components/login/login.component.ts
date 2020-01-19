import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SelectSnapshot } from '@ngxs-labs/select-snapshot';
import { Store } from '@ngxs/store';
import { AuthState, Login, Logout } from '@yeti/core';

@Component({
  selector: 'yeti-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  @SelectSnapshot(AuthState.isLoggedIn) isLoggedIn: boolean;

  constructor(private location: Location, private store: Store) {}

  ngOnInit() {
    // this.isLoggedIn = this.store.selectSnapshot(AuthState.isLoggedIn);
  }

  login(provider: string) {
    this.store.dispatch(new Login({ provider }));
  }

  logout() {
    this.store.dispatch(new Logout());
  }

  goBack(): void {
    this.location.back();
  }
}
