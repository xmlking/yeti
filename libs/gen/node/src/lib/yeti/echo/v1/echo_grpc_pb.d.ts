// package: yeti.echo.v1
// file: yeti/echo/v1/echo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yeti_echo_v1_echo_pb from "../../../yeti/echo/v1/echo_pb";

interface IEchoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    echo: IEchoServiceService_IEcho;
}

interface IEchoServiceService_IEcho extends grpc.MethodDefinition<yeti_echo_v1_echo_pb.EchoRequest, yeti_echo_v1_echo_pb.EchoResponse> {
    path: "/yeti.echo.v1.EchoService/Echo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yeti_echo_v1_echo_pb.EchoRequest>;
    requestDeserialize: grpc.deserialize<yeti_echo_v1_echo_pb.EchoRequest>;
    responseSerialize: grpc.serialize<yeti_echo_v1_echo_pb.EchoResponse>;
    responseDeserialize: grpc.deserialize<yeti_echo_v1_echo_pb.EchoResponse>;
}

export const EchoServiceService: IEchoServiceService;

export interface IEchoServiceServer extends grpc.UntypedServiceImplementation {
    echo: grpc.handleUnaryCall<yeti_echo_v1_echo_pb.EchoRequest, yeti_echo_v1_echo_pb.EchoResponse>;
}

export interface IEchoServiceClient {
    echo(request: yeti_echo_v1_echo_pb.EchoRequest, callback: (error: grpc.ServiceError | null, response: yeti_echo_v1_echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    echo(request: yeti_echo_v1_echo_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yeti_echo_v1_echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    echo(request: yeti_echo_v1_echo_pb.EchoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yeti_echo_v1_echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
}

export class EchoServiceClient extends grpc.Client implements IEchoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public echo(request: yeti_echo_v1_echo_pb.EchoRequest, callback: (error: grpc.ServiceError | null, response: yeti_echo_v1_echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    public echo(request: yeti_echo_v1_echo_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yeti_echo_v1_echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    public echo(request: yeti_echo_v1_echo_pb.EchoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yeti_echo_v1_echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
}
