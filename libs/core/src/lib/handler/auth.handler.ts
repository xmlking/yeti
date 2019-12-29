import { Injectable } from '@angular/core';
import {
  Actions,
  ofActionDispatched,
  ofActionErrored,
  ofActionSuccessful
} from '@ngxs/store';
import { Login, Logout } from '../state/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthHandler {
  constructor(private actions$: Actions) {
    this.actions$
      .pipe(ofActionSuccessful(Login))
      .subscribe(action => console.log('Login........Action Successful'));
    this.actions$
      .pipe(ofActionErrored(Login))
      .subscribe(action => console.log('Login........Action Errored'));
    // this.actions$
    //   .pipe(ofActionDispatched(Logout))
    //   .subscribe(() => this.router.navigate(['/login']));
  }
}
