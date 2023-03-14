import { Field, ID } from "@nestjs/graphql";
import { ModelBase, ModelBaseWithId } from "./models.interfaces";

export abstract class ModelType<M extends ModelBase> {
    // @Field(type => ID)
    // id: string;
}

export abstract class ModelTypeWithId<M extends ModelBaseWithId> extends ModelType<M>{
    // @Field(type => ID)
    // id: string;
}