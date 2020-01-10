import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EchoModule } from './echo/echo.module';

@Module({
  imports: [EchoModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
