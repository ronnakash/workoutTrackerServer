import { ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { ModelBase, ModelBaseWithId } from "./models.interfaces";
import { ModelType, ModelTypeWithId } from "./models.type";
import { Exercise } from "../exercise/exercise.interfaces";


export abstract class ModelEntityWithId<M extends ModelBaseWithId> {

    protected constructor() {
    }

    @PrimaryGeneratedColumn('uuid')
    _id: string;
  
    abstract toType() : ModelTypeWithId<M>;

}


export abstract class ModelEntity<M extends ModelBase> {

    protected constructor() {
    }

    @PrimaryGeneratedColumn('uuid')
    _id: string;
  
    abstract toType() : ModelType<M>;

}
