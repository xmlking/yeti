/* eslint-disable */
import { util, configure } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'yeti.common.v1';

export enum Currency {
  CURRENCY_USD_UNSPECIFIED = 0,
  CURRENCY_INR = 1,
  UNRECOGNIZED = -1,
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

export const YETI_COMMON_V1_PACKAGE_NAME = 'yeti.common.v1';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
