/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';
import { StringValue } from '../../../google/protobuf/wrappers';


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

const baseAccount: object = {
  id: "",
  name: "",
  description: "",
};

const baseProduct: object = {
  id: "",
  slug: "",
  name: "",
  description: "",
  currency: 0,
  price: 0,
};

const baseOrder: object = {
  id: "",
  body: "",
  totalPrice: 0,
  currency: 0,
  channel: "",
};

export const protobufPackage = 'yeti.common.v1'

export enum Currency {
  CURRENCY_USD_UNSPECIFIED = 0,
  CURRENCY_INR = 1,
  UNRECOGNIZED = -1,
}

export function currencyFromJSON(object: any): Currency {
  switch (object) {
    case 0:
    case "CURRENCY_USD_UNSPECIFIED":
      return Currency.CURRENCY_USD_UNSPECIFIED;
    case 1:
    case "CURRENCY_INR":
      return Currency.CURRENCY_INR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Currency.UNRECOGNIZED;
  }
}

export function currencyToJSON(object: Currency): string {
  switch (object) {
    case Currency.CURRENCY_USD_UNSPECIFIED:
      return "CURRENCY_USD_UNSPECIFIED";
    case Currency.CURRENCY_INR:
      return "CURRENCY_INR";
    default:
      return "UNKNOWN";
  }
}

export const Account = {
  encode(message: Account, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.name);
    writer.uint32(26).string(message.description);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Account {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Account>): Account {
    const message = { ...baseAccount } as Account;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
  toJSON(message: Account): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
};

export const Product = {
  encode(message: Product, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.slug);
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.description);
    writer.uint32(40).int32(message.currency);
    writer.uint32(48).int32(message.price);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Product {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = currencyFromJSON(object.currency);
    } else {
      message.currency = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price);
    } else {
      message.price = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Product>): Product {
    const message = { ...baseProduct } as Product;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = object.currency;
    } else {
      message.currency = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = 0;
    }
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
};

export const Order = {
  encode(message: Order, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.subject !== undefined && message.subject !== undefined) {
      StringValue.encode({ value: message.subject! }, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.body);
    writer.uint32(32).int32(message.totalPrice);
    writer.uint32(40).int32(message.currency);
    writer.uint32(50).string(message.channel);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Order {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = String(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    if (object.totalPrice !== undefined && object.totalPrice !== null) {
      message.totalPrice = Number(object.totalPrice);
    } else {
      message.totalPrice = 0;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = currencyFromJSON(object.currency);
    } else {
      message.currency = 0;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = String(object.channel);
    } else {
      message.channel = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Order>): Order {
    const message = { ...baseOrder } as Order;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = object.subject;
    } else {
      message.subject = undefined;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    if (object.totalPrice !== undefined && object.totalPrice !== null) {
      message.totalPrice = object.totalPrice;
    } else {
      message.totalPrice = 0;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = object.currency;
    } else {
      message.currency = 0;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    } else {
      message.channel = "";
    }
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
};

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