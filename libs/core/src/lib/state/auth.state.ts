import { Injectable } from '@angular/core';
import { NbAuthResult, NbAuthService } from '@nebular/auth';
import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Login, Logout } from './auth.actions';

export interface AuthStateModel {
  provider: string;
  authenticated: boolean;
  username: string | null;
}

// https://www.ngxs.io/recipes/authentication

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    provider: 'google',
    authenticated: false,
    username: null
  }
})
@Injectable({
  providedIn: 'root'
})
export class AuthState {
  @Selector()
  static provider(state: AuthStateModel): string {
    return state.provider;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return state.authenticated;
  }

  constructor(private authService: NbAuthService) {}

  // Login, Logout  are Fire and Forget actions
  @Action(Login)
  login(
    { getState, patchState, dispatch }: StateContext<AuthStateModel>,
    { payload }: Login
  ) {
    let provider: string;
    if (payload) {
      patchState({
        provider: payload.provider
      });
      provider = payload.provider;
    } else {
      provider = getState().provider;
    }

    // this.authService.authenticate(payload?.provider || getState().provider)
    this.authService
      .authenticate(provider)
      .subscribe((authResult: NbAuthResult) => {
        if (authResult.isSuccess()) {
          patchState({
            authenticated: true
            // token: authResult.getToken()
          });
          // dispatch(new LoadProfile());
        }
        if (authResult.getRedirect()) {
          dispatch(new Navigate([authResult.getRedirect()]));
        }
      });
  }

  @Action(Logout)
  logout({ getState, patchState }: StateContext<AuthStateModel>) {
    this.authService
      .logout(getState().provider)
      .subscribe((authResult: NbAuthResult) => {
        patchState({
          authenticated: false,
          username: null
        });
      });
  }
}
