import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config({path:`${__dirname}/.env`});

require('dotenv').config();

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.listen(5000);
  app.enableCors({
      origin: '*',
      allowedHeaders: ['Origin, X-Requested-With, Content-Type, Accept, Authorization'],
      methods: ['PUT, POST, PATCH, DELETE, GET']
  });
}

bootstrap();
