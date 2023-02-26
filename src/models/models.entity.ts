import { ObjectIdColumn } from "typeorm";
import { ModelBase } from "./models.interfaces";


export abstract class ModelEntity<M extends ModelBase> implements ModelBase {

    protected constructor(model : M) {
    }

    @ObjectIdColumn()
    _id: string;

}
