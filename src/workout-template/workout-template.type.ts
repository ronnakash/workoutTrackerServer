import { ObjectType, Field, ID } from "@nestjs/graphql";
import { ModelType, ModelTypeWithId } from "../models/models.type";
import { WorkoutTemplateEntity } from "./workout-template.entity";
import { WorkoutTemplate } from "./workout-template.interfaces";

@ObjectType('WorkoutTemplate')
export class WorkoutTemplateType extends ModelTypeWithId<WorkoutTemplate> {

    constructor(workoutEntity: WorkoutTemplateEntity);
    constructor(workout: WorkoutTemplate);

    constructor(workout: WorkoutTemplate | WorkoutTemplateEntity) {
        super();
        this._id = workout._id;
        this.title = workout.title;
        // workout.exercises.forEach(e => console.log(e));
        this.authourId = workout.author._id
        // this.exercises = workout.exercises?.map( (e : WorkoutExerciseEntity | WorkoutExercise )=> new WorkoutExerciseType(e));    
    }

    @Field(type=> ID)
    authourId : string;

    @Field(type => ID)
    _id: string;

    @Field(type => String)
    title: string;

    // @Field(type => [WorkoutTemplateExerciseType], {nullable: true})
    // exercises: WorkoutTemplateExerciseType[];

}