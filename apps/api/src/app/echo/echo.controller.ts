import { GrpcMethod, GrpcService } from '@nestjs/microservices';
import { EchoRequest, EchoResponse } from './interfaces/echo';

@GrpcService()
export class EchoController {
  @GrpcMethod('EchoService')
  echo(data: EchoRequest, metadata: any): EchoResponse {
    return {
      message: data.message
    };
  }
}
