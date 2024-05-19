export type Package = {
  id: number;
  name: string;
  price: string;
  cpu: number;
  ram: number;
  disk: number;
  meta: PackageMeta[];
  sort: number;
  type: number;
  templateId: number | null;
};

export type PackageMeta = { [key: string]: string };

export enum PackageType {
  'STATIC' = 1,
  'DYNAMIC' = 2,
}
