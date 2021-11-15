import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductionModule } from './production/production.module';

@Module({
  imports: [ProductionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
