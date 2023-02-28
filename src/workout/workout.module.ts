import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutEntity } from './workout.entity';
import { WorkoutResolver } from './workout.resolver';

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
export class WorkoutModule {}
