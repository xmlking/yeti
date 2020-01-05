import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// TODO: https://github.com/angular/angularfire/blob/master/src/auth-guard/auth-guard.ts
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // prettier-ignore
  constructor(
    private authService: NbAuthService,
    private store: Store,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuthenticated().pipe(
      tap(authenticated => {
        if (!authenticated) {
          // this.store.dispatch(new Login());
          // return router.parseUrl('/notauthorized');
          this.store.dispatch(new Navigate(['/home/login']));
        }
      })
    );
  }
}
