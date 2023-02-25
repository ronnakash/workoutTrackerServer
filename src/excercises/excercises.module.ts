import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

@Module({})
export class ExcercisesModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
    }
  }
  