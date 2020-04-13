import { Module } from '@nestjs/common';
import { ConfigModule } from '../config';

@Module({
  imports: [ConfigModule],
  providers: [
    // Enable for debugging in Dev env.
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: LoggingInterceptor,
    // },
  ],
})
export class CoreModule {}
