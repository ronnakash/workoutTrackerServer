import { Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ExcerciseType, WeightedMuscleType } from "./excercises.type";
import { Excercise, Muscle, WeightedMuscle } from "./excercises.interfaces";
import { ModelsResolver } from "src/models/models.resolver";
import { ExcerciseEntity } from "./excercises.entity";
import { ExcercisesService } from "./excercises.service";
// import { IModelService } from "src/models/models.service";
import { ModelType } from "src/models/models.type";

@Resolver(of => ExcerciseType)
export class ExcercisesResolver {
    
    
    // constructor(//@InjectModel("Note") private noteModel : Model<NoteDocument>,
    //         private excercisesService : ExcercisesService) {
    //     super(excercisesService)
    // }

    @Query( returns => ExcerciseType )
    async Excercise() : Promise<ModelType<Excercise>[]>{
        const res: ExcerciseType = {
            id: '1',
            name: "Bench Press",
            musclesWorked: [
                { muscle: "Chest", workload: 100 },
                { muscle: "Shoulders", workload: 80 },
                { muscle: "Triceps", workload: 60 },],
            workload: 100,
        };
        // const temp = await this.service.getAll();
        // var result = temp.map(e => e.toType());
        // result.push(res);
        // return result;
        return [res];
    }
    
}
