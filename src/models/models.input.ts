import { InputType } from "@nestjs/graphql";
import { ModelBase, ModelBaseWithId } from "./models.interfaces";


export interface ModelInput<M extends ModelBase> {
  
}

@InputType()
export class ModelInputWithId<M extends ModelBaseWithId> implements ModelInput<M> {
  
}