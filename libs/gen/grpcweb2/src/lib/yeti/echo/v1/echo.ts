/* eslint-disable */
import { BrowserHeaders } from 'browser-headers';
import { grpc } from '@improbable-eng/grpc-web';
import { Writer, Reader } from 'protobufjs/minimal';
import { UnaryMethodDefinition } from '@improbable-eng/grpc-web/dist/typings/service';


export interface EchoRequest {
  message: string;
}

export interface EchoResponse {
  message: string;
}

const baseEchoRequest: object = {
  message: "",
};

const baseEchoResponse: object = {
  message: "",
};

export interface EchoService {

  Echo(request: DeepPartial<EchoRequest>, metadata?: grpc.Metadata): Promise<EchoResponse>;

}

export class EchoServiceClientImpl implements EchoService {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  Echo(request: DeepPartial<EchoRequest>, metadata?: grpc.Metadata): Promise<EchoResponse> {
    return this.rpc.unary(EchoServiceEchoDesc, EchoRequest.fromPartial(request), metadata);
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

export const protobufPackage = 'yeti.echo.v1'

export const EchoRequest = {
  encode(message: EchoRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.message);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): EchoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEchoRequest } as EchoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EchoRequest {
    const message = { ...baseEchoRequest } as EchoRequest;
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<EchoRequest>): EchoRequest {
    const message = { ...baseEchoRequest } as EchoRequest;
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    return message;
  },
  toJSON(message: EchoRequest): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },
};

export const EchoResponse = {
  encode(message: EchoResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.message);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): EchoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEchoResponse } as EchoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EchoResponse {
    const message = { ...baseEchoResponse } as EchoResponse;
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<EchoResponse>): EchoResponse {
    const message = { ...baseEchoResponse } as EchoResponse;
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    return message;
  },
  toJSON(message: EchoResponse): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },
};

export const EchoServiceDesc = {
  serviceName: "yeti.echo.v1.EchoService",
}
export const EchoServiceEchoDesc: UnaryMethodDefinitionish = {
  methodName: "Echo",
  service: EchoServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary: function serializeBinary() {
      return EchoRequest.encode(this).finish();
    }
    ,
  } as any,
  responseType: {
    deserializeBinary: function deserializeBinary(data: Uint8Array) {
      return { ...EchoResponse.decode(data), toObject() { return this; } };
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