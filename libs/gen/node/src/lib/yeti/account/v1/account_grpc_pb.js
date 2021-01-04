// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yeti_account_v1_account_pb = require('../../../yeti/account/v1/account_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var validate_validate_pb = require('../../../validate/validate_pb.js');
var yeti_common_v1_common_pb = require('../../../yeti/common/v1/common_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yeti_account_v1_GetRequest(arg) {
  if (!(arg instanceof yeti_account_v1_account_pb.GetRequest)) {
    throw new Error('Expected argument of type yeti.account.v1.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yeti_account_v1_GetRequest(buffer_arg) {
  return yeti_account_v1_account_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yeti_account_v1_GetResponse(arg) {
  if (!(arg instanceof yeti_account_v1_account_pb.GetResponse)) {
    throw new Error('Expected argument of type yeti.account.v1.GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yeti_account_v1_GetResponse(buffer_arg) {
  return yeti_account_v1_account_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yeti_account_v1_WriteRequest(arg) {
  if (!(arg instanceof yeti_account_v1_account_pb.WriteRequest)) {
    throw new Error('Expected argument of type yeti.account.v1.WriteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yeti_account_v1_WriteRequest(buffer_arg) {
  return yeti_account_v1_account_pb.WriteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Account Service
var AccountServiceService = exports.AccountServiceService = {
  get: {
    path: '/yeti.account.v1.AccountService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yeti_account_v1_account_pb.GetRequest,
    responseType: yeti_account_v1_account_pb.GetResponse,
    requestSerialize: serialize_yeti_account_v1_GetRequest,
    requestDeserialize: deserialize_yeti_account_v1_GetRequest,
    responseSerialize: serialize_yeti_account_v1_GetResponse,
    responseDeserialize: deserialize_yeti_account_v1_GetResponse,
  },
  write: {
    path: '/yeti.account.v1.AccountService/Write',
    requestStream: false,
    responseStream: false,
    requestType: yeti_account_v1_account_pb.WriteRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_yeti_account_v1_WriteRequest,
    requestDeserialize: deserialize_yeti_account_v1_WriteRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.AccountServiceClient = grpc.makeGenericClientConstructor(AccountServiceService);
