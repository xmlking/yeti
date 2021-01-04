/**
 * @fileoverview gRPC-Web generated client stub for yeti.account.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as yeti_account_v1_account_pb from '../../../yeti/account/v1/account_pb';


export class AccountServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGet = new grpcWeb.AbstractClientBase.MethodInfo(
    yeti_account_v1_account_pb.GetResponse,
    (request: yeti_account_v1_account_pb.GetRequest) => {
      return request.serializeBinary();
    },
    yeti_account_v1_account_pb.GetResponse.deserializeBinary
  );

  get(
    request: yeti_account_v1_account_pb.GetRequest,
    metadata: grpcWeb.Metadata | null): Promise<yeti_account_v1_account_pb.GetResponse>;

  get(
    request: yeti_account_v1_account_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: yeti_account_v1_account_pb.GetResponse) => void): grpcWeb.ClientReadableStream<yeti_account_v1_account_pb.GetResponse>;

  get(
    request: yeti_account_v1_account_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: yeti_account_v1_account_pb.GetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/yeti.account.v1.AccountService/Get',
        request,
        metadata || {},
        this.methodInfoGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/yeti.account.v1.AccountService/Get',
    request,
    metadata || {},
    this.methodInfoGet);
  }

  methodInfoWrite = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: yeti_account_v1_account_pb.WriteRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  write(
    request: yeti_account_v1_account_pb.WriteRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  write(
    request: yeti_account_v1_account_pb.WriteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  write(
    request: yeti_account_v1_account_pb.WriteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/yeti.account.v1.AccountService/Write',
        request,
        metadata || {},
        this.methodInfoWrite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/yeti.account.v1.AccountService/Write',
    request,
    metadata || {},
    this.methodInfoWrite);
  }

}

