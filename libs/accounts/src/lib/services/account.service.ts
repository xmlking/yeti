import { Injectable } from '@angular/core';
import { EchoRequest, EchoResponse, EchoServiceClient } from '@yeti/gen';
import * as grpcWeb from 'grpc-web';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private grpcClient: EchoServiceClient;

  constructor() {
    this.grpcClient = new EchoServiceClient('http://localhost:9090/echo', null, null);
  }

  getAccounts(callback: (msg: string) => {}) {
    this.grpcClient
      .echo(new EchoRequest(), {}, (err: grpcWeb.Error, response: EchoResponse) => {
        if (err) {
          console.log('getAccounts Error:: ', err);
        }
        console.log('response', response);
      })
      .on('data', (data: EchoResponse) => {
        callback(data.getMessage());
      });
  }
}
