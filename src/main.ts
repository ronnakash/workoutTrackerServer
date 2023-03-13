import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import "reflect-metadata";

dotenv.config({path:`${__dirname}/.env`});

require('dotenv').config();

// @Catch(HttpException)
// export class HttpExceptionFilter implements ExceptionFilter {
//   catch(exception: HttpException, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const response = ctx.getResponse<Response>();
//     const request = ctx.getRequest<Request>();
//     const status = exception.getStatus();

//     response
//       .status(status)
//       .json({
//         statusCode: status,
//         timestamp: new Date().toISOString(),
//         path: request.url,
//       });
//   }
// }

const bootstrap = async () => {
  // console.log("Creating nest app");
  const app = await NestFactory.create(AppModule);
  console.log("Created nest app");
  // app.useGlobalFilters(new HttpExceptionFilter());
  app.listen(5000);
  // console.log("listening on port 5000");
  app.enableCors({
      origin: '*',
      allowedHeaders: ['Origin, X-Requested-With, Content-Type, Accept, Authorization'],
      methods: ['PUT, POST, PATCH, DELETE, GET']
  });
}

bootstrap();
