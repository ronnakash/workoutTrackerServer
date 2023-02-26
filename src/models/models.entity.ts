import { ObjectIdColumn } from "typeorm";
import { ModelBase } from "./models.interfaces";
import { ModelType } from "./models.type";
import { Excercise } from "src/excercises/excercises.interfaces";


export abstract class ModelEntity<M extends ModelBase> implements ModelBase {

    protected constructor() {
    }

    @ObjectIdColumn()
    _id: string;

    abstract toType() : ModelType<M>;

}
