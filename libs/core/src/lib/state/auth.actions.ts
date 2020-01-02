//  Commands
export class Login {
  static readonly type = '[Auth] Login';
  constructor(public readonly payload?: { provider: string }) {}
}

export class Logout {
  static readonly type = '[Auth] Logout';
}

export class LoadProfile {
  static readonly type = '[Auth] Load Profile';
}

// Events
export class LoginSuccess {
  static readonly type = '[Auth] Login Success';
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
