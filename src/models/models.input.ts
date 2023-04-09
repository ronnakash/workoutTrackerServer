import { Field, ID, InputType } from "@nestjs/graphql";
import { ModelBase, ModelBaseWithId } from "./models.interfaces";


export interface ModelInput<M extends ModelBase> {
  
}

@InputType({isAbstract: true})
export abstract class ModelInputWithId<M extends ModelBaseWithId> implements ModelInput<M> {
    
    // @Field(type=> ID)
    // _id: string;

}