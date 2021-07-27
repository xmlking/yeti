import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core';
import { EchoModule } from './echo/echo.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { YETI_ECHO_V1_PACKAGE_NAME, YETI_ACCOUNT_V1_PACKAGE_NAME } from '@yeti/gen/nest';
import { join } from 'path';
import { environment as env } from '@env-api/environment';

const protoDir = join(__dirname, '.', 'proto');
const loader =  {
  longs: Number,
    defaults: false,
    arrays: true,
    objects: true,
    oneofs: true,
    includeDirs: [protoDir],
}
const port = env.server.grpcPort ?? 5000;
const host = env.server.host ?? '0.0.0.0';

@Module({
  imports: [HttpModule, CoreModule, EchoModule,
    ClientsModule.register([
      {
        name: YETI_ECHO_V1_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:5000',
          package: YETI_ECHO_V1_PACKAGE_NAME,
          protoPath: ['yeti/echo/v1/echo.proto'],
          loader: loader
        },
      },
      {
        name: YETI_ACCOUNT_V1_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:5000',
          package: YETI_ACCOUNT_V1_PACKAGE_NAME,
          protoPath: ['yeti/common/v1/common.proto', 'yeti/account/v1/account.proto'],
          loader: loader
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
