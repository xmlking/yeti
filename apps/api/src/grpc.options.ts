import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

const protoDir = join(__dirname, '.', 'protos');

export const grpcOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:5000',
    package: 'yeti',
    protoPath: './echo.proto',
    loader: {
      longs: Number,
      defaults: false,
      arrays: true,
      objects: true,
      oneofs: true,
      includeDirs: [protoDir]
    }
  }
};
