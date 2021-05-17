import { Injectable } from '@angular/core';
import { NbAuthResult, NbAuthService } from '@nebular/auth';
import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UserInfo } from '../interfaces/user-info';
import { AuthService } from '../services/auth.service';
import { Login, LoginSuccess, Logout } from './auth.actions';
import { firstValueFrom } from 'rxjs';

export interface AuthStateModel {
  provider: string;
  isLoggedIn: boolean;
  token: string | null;
  userInfo: UserInfo | null;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    provider: 'google',
    isLoggedIn: false,
    token: null,
    userInfo: null,
  },
})
@Injectable({
  providedIn: 'root',
})
export class AuthState {
  @Selector()
  static provider(state: AuthStateModel): string {
    return state.provider;
  }

  @Selector()
  static isLoggedIn(state: AuthStateModel): boolean {
    return state.isLoggedIn;
  }

  @Selector()
  static userInfo(state: AuthStateModel): UserInfo | null {
    return state.userInfo;
  }

  constructor(private nbAuthService: NbAuthService, private authService: AuthService) {}

  // Login, Logout  are Fire and Forget actions
  @Action(Login)
  async login({ getState, patchState, dispatch }: StateContext<AuthStateModel>, { payload }: Login) {
    const provider = payload?.provider ?? getState().provider;
    patchState({
      provider,
    });

    const authResult = await firstValueFrom(this.nbAuthService.authenticate(provider));
    if (authResult.isSuccess() && authResult.getToken() != null) {
      const token = authResult.getToken().getPayload().access_token;
      const userInfo = await this.authService.getUserInfo(provider, token).toPromise();
      patchState({
        isLoggedIn: true,
        token,
        userInfo,
      });
      dispatch(new LoginSuccess());
      if (authResult.getRedirect()) {
        dispatch(new Navigate([authResult.getRedirect()]));
      }
    }
  }

  @Action(Logout)
  logout({ getState, patchState, dispatch }: StateContext<AuthStateModel>) {
    this.nbAuthService.logout(getState().provider).subscribe((authResult: NbAuthResult) => {
      patchState({
        isLoggedIn: false,
        token: null,
        userInfo: null,
      });
      dispatch(new Navigate(['/home']));
    });
  }
}
