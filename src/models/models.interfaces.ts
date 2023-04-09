export interface ModelBase {
}

export interface ModelBaseWithId extends ModelBase {
    _id: string;
}

interface IEdgeType<T extends ModelBase> {
    cursor: string;
    node: T;
  }
  
export interface IPaginatedModel<T extends ModelBase> {
    edges: IEdgeType<T>[];
    nodes: T[];
    totalCount: number;
    hasNextPage: boolean;
}

export interface ModelInput<M extends ModelBase> {
  
}

export interface ModelInputWithId<M extends ModelBaseWithId> {
  
}