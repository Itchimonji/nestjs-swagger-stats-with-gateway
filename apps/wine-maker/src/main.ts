/**
 * This is not a image server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

import * as swStats from 'swagger-stats';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT_WINE_MAKER || 3334;

  const config = new DocumentBuilder()
    .setTitle('Wine Maker API')
    .setDescription('API for made wine')
    .setVersion('1.0')
    .addTag('production')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(swStats.getMiddleware({swaggerSpec: (document)}));

  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
