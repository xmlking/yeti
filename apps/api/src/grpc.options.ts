import { GrpcOptions, Transport } from '@nestjs/microservices';
import { ServerCredentials } from '@grpc/grpc-js';
// import { ServerCredentials } from '@grpc/grpc-js';
import { join } from 'path';
import { environment as env } from '@env-api/environment';
import { YETI_ECHO_V1_PACKAGE_NAME } from '@yeti/gen/nest';

const protoDir = join(__dirname, '.', 'proto');
const port = env.server.grpcPort ?? 5001;
const host = env.server.host ?? '0.0.0.0';
const credentials =
  env.server.secure && env.server.httpsOptions
    ? {
        credentials: ServerCredentials.createSsl(
          env.server.httpsOptions.ca,
          [
            {
              private_key: env.server.httpsOptions.key,
              cert_chain: env.server.httpsOptions.cert,
            },
          ],
          false //  checkClientCertificate ??
        ),
      }
    : {};
export const grpcOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: `${host}:${port}`,
    package: ['yeti.common.v1', YETI_ECHO_V1_PACKAGE_NAME, 'yeti.account.v1'],
    protoPath: ['yeti/common/v1/common.proto', 'yeti/echo/v1/echo.proto', 'yeti/account/v1/account.proto'],
    ...credentials,
    loader: {
      longs: Number,
      defaults: false,
      arrays: true,
      objects: true,
      oneofs: true,
      includeDirs: [protoDir],
    },
  },
};
