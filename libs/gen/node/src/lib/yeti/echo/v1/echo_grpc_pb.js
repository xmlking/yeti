// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yeti_echo_v1_echo_pb = require('../../../yeti/echo/v1/echo_pb.js');

function serialize_yeti_echo_v1_EchoRequest(arg) {
  if (!(arg instanceof yeti_echo_v1_echo_pb.EchoRequest)) {
    throw new Error('Expected argument of type yeti.echo.v1.EchoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yeti_echo_v1_EchoRequest(buffer_arg) {
  return yeti_echo_v1_echo_pb.EchoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yeti_echo_v1_EchoResponse(arg) {
  if (!(arg instanceof yeti_echo_v1_echo_pb.EchoResponse)) {
    throw new Error('Expected argument of type yeti.echo.v1.EchoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yeti_echo_v1_EchoResponse(buffer_arg) {
  return yeti_echo_v1_echo_pb.EchoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var EchoServiceService = exports.EchoServiceService = {
  echo: {
    path: '/yeti.echo.v1.EchoService/Echo',
    requestStream: false,
    responseStream: false,
    requestType: yeti_echo_v1_echo_pb.EchoRequest,
    responseType: yeti_echo_v1_echo_pb.EchoResponse,
    requestSerialize: serialize_yeti_echo_v1_EchoRequest,
    requestDeserialize: deserialize_yeti_echo_v1_EchoRequest,
    responseSerialize: serialize_yeti_echo_v1_EchoResponse,
    responseDeserialize: deserialize_yeti_echo_v1_EchoResponse,
  },
};

exports.EchoServiceClient = grpc.makeGenericClientConstructor(EchoServiceService);
