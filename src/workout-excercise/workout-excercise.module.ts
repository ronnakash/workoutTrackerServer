import { MiddlewareConsumer, Module } from '@nestjs/common';
import { WorkoutExcerciseResolver } from './workout-excercise.resolver';
import { WorkoutExcerciseService } from './workout-excercise.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutExcerciseEntity } from './workout-excercise.entity';
import { ModelsModule } from '../models/models.module';
import { WorkoutExcercise } from './workout-excercise.interfaces';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkoutExcerciseEntity]),
  ],
  providers: [
    WorkoutExcerciseService,
    WorkoutExcerciseResolver,
],
  exports: [
    TypeOrmModule,
],
})
export class WorkoutExcerciseModule extends ModelsModule<WorkoutExcercise> {
    configure(consumer: MiddlewareConsumer) {
    }
  }