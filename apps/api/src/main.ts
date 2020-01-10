/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { grpcOptions } from './grpc.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice(grpcOptions);
  await app.startAllMicroservicesAsync();

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.port || 3333;
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
