/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';

export interface EchoRequest {
  message: string;
}

export interface EchoResponse {
  message: string;
}

const baseEchoRequest: object = {
  message: '',
};

const baseEchoResponse: object = {
  message: '',
};

export interface EchoService {
  Echo(request: EchoRequest): Promise<EchoResponse>;
}

export class EchoServiceClientImpl implements EchoService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  Echo(request: EchoRequest): Promise<EchoResponse> {
    const data = EchoRequest.encode(request).finish();
    const promise = this.rpc.request('yeti.echo.v1.EchoService', 'Echo', data);
    return promise.then((data) => EchoResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

export const EchoRequest = {
  encode(message: EchoRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.message);
    return writer;
  },
  decode(reader: Reader, length?: number): EchoRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseEchoRequest) as EchoRequest;
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
    const message = Object.create(baseEchoRequest) as EchoRequest;
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<EchoRequest>): EchoRequest {
    const message = Object.create(baseEchoRequest) as EchoRequest;
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = '';
    }
    return message;
  },
  toJSON(message: EchoRequest): unknown {
    const obj: any = {};
    obj.message = message.message || '';
    return obj;
  },
};

export const EchoResponse = {
  encode(message: EchoResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.message);
    return writer;
  },
  decode(reader: Reader, length?: number): EchoResponse {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseEchoResponse) as EchoResponse;
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
    const message = Object.create(baseEchoResponse) as EchoResponse;
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<EchoResponse>): EchoResponse {
    const message = Object.create(baseEchoResponse) as EchoResponse;
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = '';
    }
    return message;
  },
  toJSON(message: EchoResponse): unknown {
    const obj: any = {};
    obj.message = message.message || '';
    return obj;
  },
};

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T[P] extends Date | Function | Uint8Array | undefined
    ? T[P]
    : T[P] extends infer U | undefined
    ? DeepPartial<U>
    : T[P] extends object
    ? DeepPartial<T[P]>
    : T[P];
};
