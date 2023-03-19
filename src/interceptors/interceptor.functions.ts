import { Injectable, NestInterceptor, ExecutionContext, CallHandler, BadGatewayException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { JWTParams } from './interceptor.interfaces';
import AppError from '../util/app-error';
import config from '../config/config';
const jwt = require('jsonwebtoken');

@Injectable()
export class ValidateAdminTokenInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('ValidateAdminTokenInterceptor');
    const req = context.getArgByIndex(2).req;
    const token = req.body.jwt as JWTParams;
    const { username, permissions } = token;
    if (permissions !== 'Admin') {
      throw new AppError(`User ${username} does not have admin permissions`, 400);
    }
    return next.handle();
  }
}

@Injectable()
export class ValidateUserOrAdminInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('ValidateUserOrAdminInterceptor');
    const req = context.getArgByIndex(2).req;
    const body = req.body;
    const token = body.jwt as JWTParams;
    const { permissions, email } = token;
    if (permissions == 'Admin') {
      return next.handle();
    }
    // check if author/username match the username of token
    const requestUser = body.author || body.email;
    if (requestUser == email && requestUser != undefined) {
      return next.handle();
    } else {
      throw new AppError(`Users without admin permissions can't make actions regarding other users`, 400);
    }
  }
}



export class GetJWTInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log('GetJWTInterceptor');
        const req : any = context.getArgByIndex(2).req;
        if (req.body.jwt) {
            throw new AppError(`Can't provide JWT in request body`, 400);
        }
  
        const token = req.headers.authorization?.split(' ')[1];
        if (token) {
            return new Observable(observer => {
            jwt.verify(token, config.server.token.secret, (error, decoded) => {
                    if (error) {
                        console.log(error);
                        observer.error(error);
                    } else {
                    req.body.jwt = decoded;
                    observer.next(next.handle());
                    }
                    observer.complete();
                });
            });
        }
  
        return next.handle();
        }
  }
  

@Injectable()
export class ExistsJWTInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('ExistsJWTInterceptor');
    const req = context.getArgByIndex(2).req;
    const token = req.body.jwt;
    if (token) {
      return next.handle();
    } else {
      throw new AppError(`no token provided`, 400);
    }
  }
}


@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("ErrorsInterceptor")
    return next
      .handle()
      .pipe(
        catchError(err => throwError(() => new AppError(err))),
      );
  }
}
