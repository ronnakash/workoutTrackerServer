// import { MiddlewareConsumer, Module } from '@nestjs/common';
// import { WorkoutExerciseResolver } from './workout-exercise.resolver';
// import { WorkoutExerciseService } from './workout-exercise.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { WorkoutExerciseEntity } from './workout-exercise.entity';
// import { ModelsModule } from '../models/models.module';
// import { WorkoutExercise } from './workout-exercise.interfaces';

// @Module({
//   imports: [
//     TypeOrmModule.forFeature([WorkoutExerciseEntity]),
//   ],
//   providers: [
//     WorkoutExerciseService,
//     WorkoutExerciseResolver,
// ],
//   exports: [
//     TypeOrmModule,
// ],
// })
// export class WorkoutExcerciseModule extends ModelsModule<WorkoutExercise> {
//     configure(consumer: MiddlewareConsumer) {
//     }
//   }