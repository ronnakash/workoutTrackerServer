import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ExcerciseService } from './excercise.service';
import { ExcerciseResolver } from './excercise.resolver';
import { ModelsModule } from '../models/models.module';
import { Exercise } from './excercise.interfaces';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseEntity } from './excercise.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([ExerciseEntity]),
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
export class ExcercisesModule extends ModelsModule<Exercise> {
    configure(consumer: MiddlewareConsumer) {
    }
  }
  