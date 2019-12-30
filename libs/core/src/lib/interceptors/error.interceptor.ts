import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { Store } from '@ngxs/store';
// import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor(/*private snackBar: MatSnackBar, private store : Store*/) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(this.handleError));
  }

  /* tslint:disable */
  public handleError = (errorRes: HttpErrorResponse) => {
    const {
      error: { status, error, message }
    } = errorRes;
    // Do messaging and error handling here
    // this.snackBar.open(
    //   `Error ! ${message}`,
    //   '',
    //   ErrorInterceptor.snackBarConfig
    // );
    console.error(
      `Backend Error ! status: ${status}, error: ${error}, message: ${message}`
    );

    return throwError(errorRes);
  };
}
