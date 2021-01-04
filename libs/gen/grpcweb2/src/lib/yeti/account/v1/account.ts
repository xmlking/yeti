/* eslint-disable */
import { Account } from '../../../yeti/common/v1/common';
import { Empty } from '../../../google/protobuf/empty';
import { BrowserHeaders } from 'browser-headers';
import { grpc } from '@improbable-eng/grpc-web';
import { Writer, Reader } from 'protobufjs/minimal';
import { StringValue } from '../../../google/protobuf/wrappers';
import { UnaryMethodDefinition } from '@improbable-eng/grpc-web/dist/typings/service';


export interface GetRequest {
  key: string | undefined;
}

export interface GetResponse {
  account: Account | undefined;
}

export interface WriteRequest {
  account: Account | undefined;
}

const baseGetRequest: object = {
};

const baseGetResponse: object = {
};

const baseWriteRequest: object = {
};

/**
 *  Account Service
 */
export interface AccountService {

  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;

  Write(request: DeepPartial<WriteRequest>, metadata?: grpc.Metadata): Promise<Empty>;

}

export class AccountServiceClientImpl implements AccountService {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse> {
    return this.rpc.unary(AccountServiceGetDesc, GetRequest.fromPartial(request), metadata);
  }

  Write(request: DeepPartial<WriteRequest>, metadata?: grpc.Metadata): Promise<Empty> {
    return this.rpc.unary(AccountServiceWriteDesc, WriteRequest.fromPartial(request), metadata);
  }

}

interface Rpc {

  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;

}

export class GrpcWebImpl implements Rpc {

  private host: string;

  private options: { transport?: grpc.TransportFactory, debug?: boolean, metadata?: grpc.Metadata | undefined };

  constructor(host: string, options: { transport?: grpc.TransportFactory, debug?: boolean, metadata?: grpc.Metadata | undefined }) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
        const maybeCombinedMetadata =
        metadata && this.options.metadata
          ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
          : metadata || this.options.metadata;
        return new Promise((resolve, reject) => {
          grpc.unary(methodDesc, {
            request,
            host: this.host,
            metadata: maybeCombinedMetadata,
            transport: this.options.transport,
            debug: this.options.debug,
            onEnd: function (response) {
              if (response.status === grpc.Code.OK) {
                resolve(response.message);
              } else {
                const err = new Error(response.statusMessage) as any;
                err.code = response.status;
                err.metadata = response.trailers;
                reject(err);
              }
            },
          });
        });}

}

export const protobufPackage = 'yeti.account.v1'

export const GetRequest = {
  encode(message: GetRequest, writer: Writer = Writer.create()): Writer {
    if (message.key !== undefined && message.key !== undefined) {
      StringValue.encode({ value: message.key! }, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetRequest } as GetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = StringValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetRequest {
    const message = { ...baseGetRequest } as GetRequest;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetRequest>): GetRequest {
    const message = { ...baseGetRequest } as GetRequest;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = undefined;
    }
    return message;
  },
  toJSON(message: GetRequest): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },
};

export const GetResponse = {
  encode(message: GetResponse, writer: Writer = Writer.create()): Writer {
    if (message.account !== undefined && message.account !== undefined) {
      Account.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetResponse } as GetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Account.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetResponse {
    const message = { ...baseGetResponse } as GetResponse;
    if (object.account !== undefined && object.account !== null) {
      message.account = Account.fromJSON(object.account);
    } else {
      message.account = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetResponse>): GetResponse {
    const message = { ...baseGetResponse } as GetResponse;
    if (object.account !== undefined && object.account !== null) {
      message.account = Account.fromPartial(object.account);
    } else {
      message.account = undefined;
    }
    return message;
  },
  toJSON(message: GetResponse): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account ? Account.toJSON(message.account) : undefined);
    return obj;
  },
};

export const WriteRequest = {
  encode(message: WriteRequest, writer: Writer = Writer.create()): Writer {
    if (message.account !== undefined && message.account !== undefined) {
      Account.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): WriteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWriteRequest } as WriteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Account.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WriteRequest {
    const message = { ...baseWriteRequest } as WriteRequest;
    if (object.account !== undefined && object.account !== null) {
      message.account = Account.fromJSON(object.account);
    } else {
      message.account = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<WriteRequest>): WriteRequest {
    const message = { ...baseWriteRequest } as WriteRequest;
    if (object.account !== undefined && object.account !== null) {
      message.account = Account.fromPartial(object.account);
    } else {
      message.account = undefined;
    }
    return message;
  },
  toJSON(message: WriteRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account ? Account.toJSON(message.account) : undefined);
    return obj;
  },
};

export const AccountServiceDesc = {
  serviceName: "yeti.account.v1.AccountService",
}
export const AccountServiceGetDesc: UnaryMethodDefinitionish = {
  methodName: "Get",
  service: AccountServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary: function serializeBinary() {
      return GetRequest.encode(this).finish();
    }
    ,
  } as any,
  responseType: {
    deserializeBinary: function deserializeBinary(data: Uint8Array) {
      return { ...GetResponse.decode(data), toObject() { return this; } };
    }
    ,
  } as any,
}
export const AccountServiceWriteDesc: UnaryMethodDefinitionish = {
  methodName: "Write",
  service: AccountServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary: function serializeBinary() {
      return WriteRequest.encode(this).finish();
    }
    ,
  } as any,
  responseType: {
    deserializeBinary: function deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
    ,
  } as any,
}
interface UnaryMethodDefinitionishR extends UnaryMethodDefinition<any, any> { requestStream: any; responseStream: any; };
type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;