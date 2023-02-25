import { Resolver } from '@nestjs/graphql';
import { WorkoutExcerciseType } from './workout-excercise.type';

@Resolver(of => WorkoutExcerciseType)
export class WorkoutExcerciseResolver {}
