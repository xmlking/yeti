import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from './app/config';
import { environment as env } from '@env-api/environment';
import { grpcOptions } from './grpc.options';

async function bootstrap() {
  const httpsOptions = env.server.secure ? env.server.httpsOptions : undefined;

  const app = await NestFactory.create(AppModule, { cors: true, httpsOptions });
  const config: ConfigService = app.get(ConfigService);

  app.connectMicroservice(grpcOptions);
  await app.startAllMicroservices();

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = env.server.httpPort ?? 3000;
  const host = env.server.host ?? '0.0.0.0';
  // Starts listening to shutdown hooks
  app.enableShutdownHooks();

  await app.listen(port, host);
  Logger.log(`Version: ${config.getVersion()}`);
  Logger.log(`Application is running on: ${await app.getUrl()}/${globalPrefix}`);
}

bootstrap();
