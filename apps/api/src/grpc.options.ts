import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

const protoDir = join(__dirname, '.', 'proto');

export const grpcOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:5000',
    package: ['yeti.common.v1', 'yeti.echo.v1', 'yeti.account.v1'],
    protoPath: ['yeti/common/v1/common.proto', 'yeti/echo/v1/echo.proto', 'yeti/account/v1/account.proto'],
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
