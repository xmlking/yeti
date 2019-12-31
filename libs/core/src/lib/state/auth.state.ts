import { Injectable } from '@angular/core';
import { NbAuthResult, NbAuthService, NbAuthToken } from '@nebular/auth';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Login, LoginSuccess, Logout } from './auth.actions';

export interface AuthStateModel {
  provider: string;
  token: NbAuthToken | null;
  username: string | null;
}

// https://www.ngxs.io/recipes/authentication

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    provider: 'google',
    token: null,
    username: null
  }
})
@Injectable({
  providedIn: 'root'
})
export class AuthState {
  @Selector()
  static token(state: AuthStateModel): NbAuthToken | null {
    return state.token;
  }

  @Selector()
  static provider(state: AuthStateModel): string {
    return state.provider;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.token;
  }

  constructor(private authService: NbAuthService) {}

  @Action(Login)
  login(
    { getState, patchState }: StateContext<AuthStateModel>,
    { payload }: Login
  ) {
    if (payload) {
      patchState({
        provider: payload.provider
      });
      this.authService.authenticate(payload.provider).subscribe();
    } else {
      this.authService.authenticate(getState().provider).subscribe();
    }
    // this.authService
    //   .authenticate(payload?.provider || getState().provider)
    //   .subscribe((authResult: NbAuthResult) => {});
  }

  @Action(Logout)
  logout({ getState, patchState }: StateContext<AuthStateModel>) {
    return this.authService.logout(getState().provider).pipe(
      tap(() => {
        patchState({
          token: null,
          username: null
        });
      })
    );
  }

  @Action(LoginSuccess)
  loginSuccess(
    { getState, patchState }: StateContext<AuthStateModel>,
    { payload }: LoginSuccess
  ) {
    patchState({
      token: payload.token
    });
  }
}
