export type PhotoQuery = {
  Key: string;
  LastModified: Date;
  ETag?: string;
  ChecksumAlgorithm: Array<unknown>;
  Size: number;
  StorageClass: string;
  Owner: PhotoOwner;
};

type PhotoOwner = {
  DisplayName: string;
  ID: string;
};
