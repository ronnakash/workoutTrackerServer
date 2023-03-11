import { ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { ModelBase } from "./models.interfaces";
import { ModelType } from "./models.type";
import { Exercise } from "../excercise/excercise.interfaces";


export abstract class ModelEntity<M extends ModelBase> {

    protected constructor() {
    }

    @PrimaryGeneratedColumn('uuid')
    _id: string;
  
    abstract toType() : ModelType<M>;

}
