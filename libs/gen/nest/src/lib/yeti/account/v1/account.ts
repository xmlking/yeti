/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices'
import { util, configure } from 'protobufjs/minimal'
import * as Long from 'long'
import { Observable } from 'rxjs'
import { Account } from '../../../yeti/common/v1/common'
import { Metadata } from '@grpc/grpc-js'
import { Empty } from '../../../google/protobuf/empty'

export interface GetRequest {
  key: string | undefined
}

export interface GetResponse {
  account: Account | undefined
}

export interface WriteRequest {
  account: Account | undefined
}

export const YETI_ACCOUNT_V1_PACKAGE_NAME = 'yeti.account.v1'

/** Account Service */

export interface AccountServiceClient {
  get(request: GetRequest, metadata?: Metadata): Observable<GetResponse>

  write(request: WriteRequest, metadata?: Metadata): Observable<Empty>
}

/** Account Service */

export interface AccountServiceController {
  get(request: GetRequest, metadata?: Metadata): Promise<GetResponse> | Observable<GetResponse> | GetResponse

  write(request: WriteRequest, metadata?: Metadata): void
}

export function AccountServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['get', 'write']
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method)
      GrpcMethod('AccountService', method)(constructor.prototype[method], method, descriptor)
    }
    const grpcStreamMethods: string[] = []
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method)
      GrpcStreamMethod('AccountService', method)(constructor.prototype[method], method, descriptor)
    }
  }
}

export const ACCOUNT_SERVICE_NAME = 'AccountService'

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
