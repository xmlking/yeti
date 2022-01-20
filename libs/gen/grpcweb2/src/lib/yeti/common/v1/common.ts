/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { StringValue } from '../../../google/protobuf/wrappers';

export enum Currency {
  CURRENCY_USD_UNSPECIFIED = 0,
  CURRENCY_INR = 1,
  UNRECOGNIZED = -1,
}

export function currencyFromJSON(object: any): Currency {
  switch (object) {
    case 0:
    case 'CURRENCY_USD_UNSPECIFIED':
      return Currency.CURRENCY_USD_UNSPECIFIED;
    case 1:
    case 'CURRENCY_INR':
      return Currency.CURRENCY_INR;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Currency.UNRECOGNIZED;
  }
}

export function currencyToJSON(object: Currency): string {
  switch (object) {
    case Currency.CURRENCY_USD_UNSPECIFIED:
      return 'CURRENCY_USD_UNSPECIFIED';
    case Currency.CURRENCY_INR:
      return 'CURRENCY_INR';
    default:
      return 'UNKNOWN';
  }
}

export interface Account {
  id: string;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  currency: Currency;
  price: number;
}

export interface Order {
  id: string;
  subject: string | undefined;
  body: string;
  totalPrice: number;
  currency: Currency;
  channel: string;
}

const baseAccount: object = { id: '', name: '', description: '' };

export const Account = {
  encode(message: Account, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== '') {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccount } as Account;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Account {
    const message = { ...baseAccount } as Account;
    message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
    message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
    message.description =
      object.description !== undefined && object.description !== null ? String(object.description) : '';
    return message;
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<Account>): Account {
    const message = { ...baseAccount } as Account;
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    message.description = object.description ?? '';
    return message;
  },
};

const baseProduct: object = { id: '', slug: '', name: '', description: '', currency: 0, price: 0 };

export const Product = {
  encode(message: Product, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.slug !== '') {
      writer.uint32(18).string(message.slug);
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== '') {
      writer.uint32(34).string(message.description);
    }
    if (message.currency !== 0) {
      writer.uint32(40).int32(message.currency);
    }
    if (message.price !== 0) {
      writer.uint32(48).int32(message.price);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Product {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProduct } as Product;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.slug = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.currency = reader.int32() as any;
          break;
        case 6:
          message.price = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Product {
    const message = { ...baseProduct } as Product;
    message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
    message.slug = object.slug !== undefined && object.slug !== null ? String(object.slug) : '';
    message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
    message.description =
      object.description !== undefined && object.description !== null ? String(object.description) : '';
    message.currency =
      object.currency !== undefined && object.currency !== null ? currencyFromJSON(object.currency) : 0;
    message.price = object.price !== undefined && object.price !== null ? Number(object.price) : 0;
    return message;
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.slug !== undefined && (obj.slug = message.slug);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.currency !== undefined && (obj.currency = currencyToJSON(message.currency));
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial(object: DeepPartial<Product>): Product {
    const message = { ...baseProduct } as Product;
    message.id = object.id ?? '';
    message.slug = object.slug ?? '';
    message.name = object.name ?? '';
    message.description = object.description ?? '';
    message.currency = object.currency ?? 0;
    message.price = object.price ?? 0;
    return message;
  },
};

const baseOrder: object = { id: '', body: '', totalPrice: 0, currency: 0, channel: '' };

export const Order = {
  encode(message: Order, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.subject !== undefined) {
      StringValue.encode({ value: message.subject! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.body !== '') {
      writer.uint32(26).string(message.body);
    }
    if (message.totalPrice !== 0) {
      writer.uint32(32).int32(message.totalPrice);
    }
    if (message.currency !== 0) {
      writer.uint32(40).int32(message.currency);
    }
    if (message.channel !== '') {
      writer.uint32(50).string(message.channel);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrder } as Order;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.subject = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.body = reader.string();
          break;
        case 4:
          message.totalPrice = reader.int32();
          break;
        case 5:
          message.currency = reader.int32() as any;
          break;
        case 6:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Order {
    const message = { ...baseOrder } as Order;
    message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
    message.subject = object.subject !== undefined && object.subject !== null ? String(object.subject) : undefined;
    message.body = object.body !== undefined && object.body !== null ? String(object.body) : '';
    message.totalPrice = object.totalPrice !== undefined && object.totalPrice !== null ? Number(object.totalPrice) : 0;
    message.currency =
      object.currency !== undefined && object.currency !== null ? currencyFromJSON(object.currency) : 0;
    message.channel = object.channel !== undefined && object.channel !== null ? String(object.channel) : '';
    return message;
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.subject !== undefined && (obj.subject = message.subject);
    message.body !== undefined && (obj.body = message.body);
    message.totalPrice !== undefined && (obj.totalPrice = message.totalPrice);
    message.currency !== undefined && (obj.currency = currencyToJSON(message.currency));
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = { ...baseOrder } as Order;
    message.id = object.id ?? '';
    message.subject = object.subject ?? undefined;
    message.body = object.body ?? '';
    message.totalPrice = object.totalPrice ?? 0;
    message.currency = object.currency ?? 0;
    message.channel = object.channel ?? '';
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
