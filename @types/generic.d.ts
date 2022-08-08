type CommonJSON<V = any> = {
  [key: string]: V;
};

declare interface WithTypename {
  __typename: string;
}

declare interface WithTimestamps {
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
