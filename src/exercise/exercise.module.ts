import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseResolver } from './exercise.resolver';
import { ModelsModule } from '../models/models.module';
import { Exercise } from './exercise.interfaces';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseEntity } from './exercise.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([ExerciseEntity]),
  ],
  providers: [
    ExerciseService,
    ExerciseResolver,
],
  exports: [
    TypeOrmModule,
    ExerciseService,
],
})
export class ExcercisesModule extends ModelsModule<Exercise> {
    configure(consumer: MiddlewareConsumer) {
    }
  }
  