import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ExcerciseService } from './excercise.service';
import { ExcerciseResolver } from './excercise.resolver';
import { ModelsModule } from '../models/models.module';
import { Excercise } from './excercise.interfaces';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExcerciseEntity } from './excercise.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([ExcerciseEntity]),
  ],
  providers: [
    ExcerciseService,
    ExcerciseResolver,
],
  exports: [
    TypeOrmModule,
    ExcerciseService,
],
})
export class ExcercisesModule extends ModelsModule<Excercise> {
    configure(consumer: MiddlewareConsumer) {
    }
  }
  