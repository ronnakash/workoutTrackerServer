import { ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { IPaginatedModel, ModelBase, ModelBaseWithId } from "./models.interfaces";
import { ModelType, ModelTypeWithId } from "./models.type";
import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Type } from '@nestjs/common';


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

    // @PrimaryGeneratedColumn('uuid')
    // _id: string;
  
    abstract toType() : ModelType<M>;

}


export function PaginatedModel<T extends ModelBase>(classRef: Type<T>): Type<IPaginatedModel<T>> {
  @ObjectType(`${classRef.name}Edge`)
  abstract class EdgeType {
    @Field((type) => String)
    cursor: string;

    @Field((type) => classRef)
    node: T;
  }

  @ObjectType({ isAbstract: true })
  abstract class PaginatedModel implements IPaginatedModel<T> {
    @Field((type) => [EdgeType], { nullable: true })
    edges: EdgeType[];

    @Field((type) => [classRef], { nullable: true })
    nodes: T[];

    @Field((type) => Int)
    totalCount: number;

    @Field()
    hasNextPage: boolean;
  }
  return PaginatedModel as Type<IPaginatedModel<T>>;
}
