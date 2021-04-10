/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { util, configure } from 'protobufjs/minimal';
import * as Long from 'long';
import { Observable } from 'rxjs';
import { Metadata } from 'grpc';

export const protobufPackage = 'yeti.echo.v1';

export interface EchoRequest {
  message: string;
}

export interface EchoResponse {
  message: string;
}

export const YETI_ECHO_V1_PACKAGE_NAME = 'yeti.echo.v1';

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
  };
}

export const ECHO_SERVICE_NAME = 'EchoService';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
