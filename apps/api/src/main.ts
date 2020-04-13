import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from './app/config';
import { environment as env } from './environments/environment';
import { grpcOptions } from './grpc.options';

async function bootstrap() {
  const httpsOptions = env.server.secure ? env.server.httpsOptions : {};

  const app = await NestFactory.create(AppModule, { cors: true, httpsOptions });
  const config: ConfigService = app.get(ConfigService);

  app.connectMicroservice(grpcOptions);
  await app.startAllMicroservicesAsync();

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = env.server.httpPort ?? 3000;
  const host = env.server.host ?? '0.0.0.0';
  // Starts listening to shutdown hooks
  app.enableShutdownHooks();

  await app.listen(port, host, () => {
    console.log(`Version: ${config.getVersion()}`);
    console.log(`Listening at ${host}:${port}/${globalPrefix}, Secure? ${env.server.secure}`);
  });
}

bootstrap();
