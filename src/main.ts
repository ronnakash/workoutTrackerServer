import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import "reflect-metadata";
import { ErrorsInterceptor } from './interceptors/interceptor.functions';

dotenv.config({path:`${__dirname}/.env`});

require('dotenv').config();


const bootstrap = async () => {
  // console.log("Creating nest app");
  const app = await NestFactory.create(AppModule);
  console.log("Created nest app");
  // app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ErrorsInterceptor());
  app.listen(5000);
  // console.log("listening on port 5000");
  app.enableCors({
      origin: '*',
      allowedHeaders: ['Origin, X-Requested-With, Content-Type, Accept, Authorization'],
      methods: ['PUT, POST, PATCH, DELETE, GET']
  });
  return app;
}

// export const server = bootstrap();
bootstrap();