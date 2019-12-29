//  Commands
export class Login {
  static readonly type = '[Auth] Login';
  constructor(public readonly payload?: { infoMsg?: string }) {}
}
export class Logout {
  static readonly type = '[Auth] Logout';
}
export class Signup {
  static readonly type = '[Auth] Signup';
}
export class LoadProfile {
  static readonly type = '[Auth] Load Profile';
  constructor(public payload: any) {}
}

// Events
export class LoginSuccess {
  static readonly type = '[Auth] Login Success';
  constructor(public readonly payload: any) {}
}
export class LoginCanceled {
  static readonly type = '[Auth] Login Canceled';
}
export class LogoutSuccess {
  static readonly type = '[Auth] Logout Success';
}
export class ProfileLoaded {
  static readonly type = '[Auth] Profile Loaded';
}
