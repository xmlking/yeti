import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core';
import { EchoModule } from './echo/echo.module';

@Module({
  imports: [HttpModule, CoreModule, EchoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
