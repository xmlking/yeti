// package: yeti.account.v1
// file: yeti/account/v1/account.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";
import * as yeti_common_v1_common_pb from "../../../yeti/common/v1/common_pb";

export class GetRequest extends jspb.Message { 

    hasKey(): boolean;
    clearKey(): void;
    getKey(): google_protobuf_wrappers_pb.StringValue | undefined;
    setKey(value?: google_protobuf_wrappers_pb.StringValue): GetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRequest;
    static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
    export type AsObject = {
        key?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class GetResponse extends jspb.Message { 

    hasAccount(): boolean;
    clearAccount(): void;
    getAccount(): yeti_common_v1_common_pb.Account | undefined;
    setAccount(value?: yeti_common_v1_common_pb.Account): GetResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetResponse;
    static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
    export type AsObject = {
        account?: yeti_common_v1_common_pb.Account.AsObject,
    }
}

export class WriteRequest extends jspb.Message { 

    hasAccount(): boolean;
    clearAccount(): void;
    getAccount(): yeti_common_v1_common_pb.Account | undefined;
    setAccount(value?: yeti_common_v1_common_pb.Account): WriteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WriteRequest): WriteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteRequest;
    static deserializeBinaryFromReader(message: WriteRequest, reader: jspb.BinaryReader): WriteRequest;
}

export namespace WriteRequest {
    export type AsObject = {
        account?: yeti_common_v1_common_pb.Account.AsObject,
    }
}
