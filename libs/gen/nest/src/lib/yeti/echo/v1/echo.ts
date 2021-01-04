/* eslint-disable */
import { Metadata } from 'grpc';
import { Observable } from 'rxjs';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';


export interface EchoRequest {
  message: string;
}

export interface EchoResponse {
  message: string;
}

export interface EchoServiceClient {

  echo(request: EchoRequest, metadata?: Metadata): Observable<EchoResponse>;

}

export interface EchoServiceController {

  echo(request: EchoRequest, metadata?: Metadata): Promise<EchoResponse> | Observable<EchoResponse> | EchoResponse;

}

export function EchoServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['echo'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod('EchoService', method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod('EchoService', method)(constructor.prototype[method], method, descriptor);
    }
  }
}

export const protobufPackage = 'yeti.echo.v1'

export const YETI_ECHO_V1_PACKAGE_NAME = 'yeti.echo.v1'
export const ECHO_SERVICE_NAME = 'EchoService';