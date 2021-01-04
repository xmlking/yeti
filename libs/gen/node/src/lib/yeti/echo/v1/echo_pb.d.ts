// package: yeti.echo.v1
// file: yeti/echo/v1/echo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class EchoRequest extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): EchoRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EchoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EchoRequest): EchoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EchoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EchoRequest;
    static deserializeBinaryFromReader(message: EchoRequest, reader: jspb.BinaryReader): EchoRequest;
}

export namespace EchoRequest {
    export type AsObject = {
        message: string,
    }
}

export class EchoResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): EchoResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EchoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EchoResponse): EchoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EchoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EchoResponse;
    static deserializeBinaryFromReader(message: EchoResponse, reader: jspb.BinaryReader): EchoResponse;
}

export namespace EchoResponse {
    export type AsObject = {
        message: string,
    }
}
