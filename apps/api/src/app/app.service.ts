import { Injectable } from '@nestjs/common';
import { Message } from '@yeti/gen';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
