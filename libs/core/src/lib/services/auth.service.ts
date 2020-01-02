import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserInfo } from '../interfaces/user-info';

const GOOGLE_USER_INFO_URL = 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  getUserInfo(provider: string, token: string) {
    const httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });
    return this.httpClient
      .get<UserInfo>(GOOGLE_USER_INFO_URL, { headers: httpHeaders })
      .pipe(tap(res => console.log(res)));
  }
}
