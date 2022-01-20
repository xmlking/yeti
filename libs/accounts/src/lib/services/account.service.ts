import { Injectable } from '@angular/core';
import { EchoRequest, EchoResponse, EchoServiceClient } from '@yeti/gen/grpcweb';
import * as grpcWeb from 'grpc-web';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private grpcClient: EchoServiceClient;

  constructor() {
    this.grpcClient = new EchoServiceClient('http://localhost:9090', null, null);
  }

  getAccounts(callback: (msg: string) => void) {
    const request = new EchoRequest();
    request.setMessage('sumo');
    console.log('request', request);

    this.grpcClient
      .echo(request, {}, (err: grpcWeb.RpcError, response: EchoResponse) => {
        if (err) {
          console.log('getAccounts Error:: ', err);
        }
        console.log('response', response);
      })
      .on('data', (data: EchoResponse) => {
        console.log(data.getMessage());
        console.log('response', data.getMessage());
        callback(data.getMessage());
      });
  }
}
