// package: yeti.common.v1
// file: yeti/common/v1/common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";

export class Account extends jspb.Message { 
    getId(): string;
    setId(value: string): Account;
    getName(): string;
    setName(value: string): Account;
    getDescription(): string;
    setDescription(value: string): Account;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Account.AsObject;
    static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Account;
    static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
    }
}

export class Product extends jspb.Message { 
    getId(): string;
    setId(value: string): Product;
    getSlug(): string;
    setSlug(value: string): Product;
    getName(): string;
    setName(value: string): Product;
    getDescription(): string;
    setDescription(value: string): Product;
    getCurrency(): Currency;
    setCurrency(value: Currency): Product;
    getPrice(): number;
    setPrice(value: number): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Product.AsObject;
    static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Product;
    static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
    export type AsObject = {
        id: string,
        slug: string,
        name: string,
        description: string,
        currency: Currency,
        price: number,
    }
}

export class Order extends jspb.Message { 
    getId(): string;
    setId(value: string): Order;

    hasSubject(): boolean;
    clearSubject(): void;
    getSubject(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSubject(value?: google_protobuf_wrappers_pb.StringValue): Order;
    getBody(): string;
    setBody(value: string): Order;
    getTotalPrice(): number;
    setTotalPrice(value: number): Order;
    getCurrency(): Currency;
    setCurrency(value: Currency): Order;
    getChannel(): string;
    setChannel(value: string): Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Order.AsObject;
    static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Order;
    static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
    export type AsObject = {
        id: string,
        subject?: google_protobuf_wrappers_pb.StringValue.AsObject,
        body: string,
        totalPrice: number,
        currency: Currency,
        channel: string,
    }
}

export enum Currency {
    CURRENCY_USD_UNSPECIFIED = 0,
    CURRENCY_INR = 1,
}
