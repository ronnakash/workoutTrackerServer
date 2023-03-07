import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutEntity } from './workout.entity';
import { WorkoutResolver } from './workout.resolver';
import { Workout } from './workout.interfaces';
import { ModelsModule } from '../models/models.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkoutEntity]),
  ],
  providers: [
    WorkoutService,
    WorkoutResolver,
  ],
  exports: [
    TypeOrmModule,
],
})
export class WorkoutModule extends ModelsModule<Workout>{}
