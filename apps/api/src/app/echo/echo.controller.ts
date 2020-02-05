import { GrpcMethod, GrpcService } from '@nestjs/microservices';
import { EchoRequest, EchoResponse } from './interfaces';
// var fakeUser [] = []
@GrpcService()
export class EchoController {
  @GrpcMethod('EchoService')
  echo(data: EchoRequest, metadata: any): EchoResponse {
    console.log('request', data);
    return {
      message: data.message
    };
  }
}
