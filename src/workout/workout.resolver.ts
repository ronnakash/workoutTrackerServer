import { Resolver } from '@nestjs/graphql';
import { WorkoutType } from './workout.type';

@Resolver(of => WorkoutType)
export class WorkoutResolver {


}
