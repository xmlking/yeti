import { Controller } from '@nestjs/common';
import { EchoRequest, EchoResponse, EchoServiceController, EchoServiceControllerMethods } from '@yeti/gen/nest';
// var fakeUser [] = []

@Controller()
// Generated decorator that applies all the @GrpcMethod and @GrpcStreamMethod to the right methods
@EchoServiceControllerMethods()
export class EchoController  implements EchoServiceController {
  echo(data: EchoRequest, metadata: unknown): EchoResponse {
    console.log('request', data, metadata);
    return {
      message: data.message,
    };
  }
}
