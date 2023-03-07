import { ObjectIdColumn } from "typeorm";
import { ModelBase } from "./models.interfaces";
import { ModelType } from "./models.type";
import { Excercise } from "../excercise/excercise.interfaces";


export abstract class ModelEntity<M extends ModelBase> {

    protected constructor() {
    }

    @ObjectIdColumn()
    _id: string;

    abstract toType() : ModelType<M>;

}
