// package: yeti.account.v1
// file: yeti/account/v1/account.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yeti_account_v1_account_pb from "../../../yeti/account/v1/account_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";
import * as yeti_common_v1_common_pb from "../../../yeti/common/v1/common_pb";

interface IAccountServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IAccountServiceService_IGet;
    write: IAccountServiceService_IWrite;
}

interface IAccountServiceService_IGet extends grpc.MethodDefinition<yeti_account_v1_account_pb.GetRequest, yeti_account_v1_account_pb.GetResponse> {
    path: "/yeti.account.v1.AccountService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yeti_account_v1_account_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<yeti_account_v1_account_pb.GetRequest>;
    responseSerialize: grpc.serialize<yeti_account_v1_account_pb.GetResponse>;
    responseDeserialize: grpc.deserialize<yeti_account_v1_account_pb.GetResponse>;
}
interface IAccountServiceService_IWrite extends grpc.MethodDefinition<yeti_account_v1_account_pb.WriteRequest, google_protobuf_empty_pb.Empty> {
    path: "/yeti.account.v1.AccountService/Write";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yeti_account_v1_account_pb.WriteRequest>;
    requestDeserialize: grpc.deserialize<yeti_account_v1_account_pb.WriteRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const AccountServiceService: IAccountServiceService;

export interface IAccountServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yeti_account_v1_account_pb.GetRequest, yeti_account_v1_account_pb.GetResponse>;
    write: grpc.handleUnaryCall<yeti_account_v1_account_pb.WriteRequest, google_protobuf_empty_pb.Empty>;
}

export interface IAccountServiceClient {
    get(request: yeti_account_v1_account_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: yeti_account_v1_account_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: yeti_account_v1_account_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yeti_account_v1_account_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: yeti_account_v1_account_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yeti_account_v1_account_pb.GetResponse) => void): grpc.ClientUnaryCall;
    write(request: yeti_account_v1_account_pb.WriteRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    write(request: yeti_account_v1_account_pb.WriteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    write(request: yeti_account_v1_account_pb.WriteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class AccountServiceClient extends grpc.Client implements IAccountServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yeti_account_v1_account_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: yeti_account_v1_account_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: yeti_account_v1_account_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yeti_account_v1_account_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: yeti_account_v1_account_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yeti_account_v1_account_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public write(request: yeti_account_v1_account_pb.WriteRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public write(request: yeti_account_v1_account_pb.WriteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public write(request: yeti_account_v1_account_pb.WriteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
