import { INestMicroservice } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  EchoServiceClient,
  ECHO_SERVICE_NAME,
  YETI_ECHO_V1_PACKAGE_NAME,
} from '@yeti/gen/nest';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../../src/app/app.module';
import { environment as env } from '@env-api/environment';

describe('EchoController (e2e)', () => {
  let app: INestMicroservice;
  let client: ClientGrpc;
  let echoService: EchoServiceClient;

  beforeAll(async () => {
    const httpsOptions = env.server.secure ? env.server.httpsOptions : undefined;
    const app = await NestFactory.create(AppModule, { cors: true, httpsOptions });
    client = app.get(YETI_ECHO_V1_PACKAGE_NAME);
    echoService = client.getService<EchoServiceClient>(ECHO_SERVICE_NAME);
    const port = env.server.httpPort ?? 3000;
    const host = env.server.host ?? '0.0.0.0';
    await app.listenAsync(port, host);
  });

  afterAll(async () => {
    await app.close();
  });

  it('should get grpc client', async () => {
    expect(client).not.toBeUndefined();
  });

  it('should get echoService', async () => {
    expect(echoService).not.toBeUndefined();
  });

  it('should echo', async () => {
    const currentUser = await echoService.echo({message: "sumo"}).toPromise();
    expect(currentUser).toEqual({id: 1, name: 'test'});
  });
});
