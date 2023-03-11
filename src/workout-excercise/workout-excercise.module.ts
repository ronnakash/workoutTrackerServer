import { MiddlewareConsumer, Module } from '@nestjs/common';
import { WorkoutExerciseResolver } from './workout-excercise.resolver';
import { WorkoutExerciseService } from './workout-excercise.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutExerciseEntity } from './workout-excercise.entity';
import { ModelsModule } from '../models/models.module';
import { WorkoutExercise } from './workout-excercise.interfaces';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkoutExerciseEntity]),
  ],
  providers: [
    WorkoutExerciseService,
    WorkoutExerciseResolver,
],
  exports: [
    TypeOrmModule,
],
})
export class WorkoutExcerciseModule extends ModelsModule<WorkoutExercise> {
    configure(consumer: MiddlewareConsumer) {
    }
  }