import { Field, ID } from "@nestjs/graphql";
import { ModelBase } from "./models.interfaces";

export abstract class ModelType<M extends ModelBase> {
    // @Field(type => ID)
    // id: string;
}