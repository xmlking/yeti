/**
 * @fileoverview gRPC-Web generated client stub for yeti.echo.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as yeti_echo_v1_echo_pb from '../../../yeti/echo/v1/echo_pb';


export class EchoServiceClient {
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

  methodInfoEcho = new grpcWeb.AbstractClientBase.MethodInfo(
    yeti_echo_v1_echo_pb.EchoResponse,
    (request: yeti_echo_v1_echo_pb.EchoRequest) => {
      return request.serializeBinary();
    },
    yeti_echo_v1_echo_pb.EchoResponse.deserializeBinary
  );

  echo(
    request: yeti_echo_v1_echo_pb.EchoRequest,
    metadata: grpcWeb.Metadata | null): Promise<yeti_echo_v1_echo_pb.EchoResponse>;

  echo(
    request: yeti_echo_v1_echo_pb.EchoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: yeti_echo_v1_echo_pb.EchoResponse) => void): grpcWeb.ClientReadableStream<yeti_echo_v1_echo_pb.EchoResponse>;

  echo(
    request: yeti_echo_v1_echo_pb.EchoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: yeti_echo_v1_echo_pb.EchoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/yeti.echo.v1.EchoService/Echo',
        request,
        metadata || {},
        this.methodInfoEcho,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/yeti.echo.v1.EchoService/Echo',
    request,
    metadata || {},
    this.methodInfoEcho);
  }

}

