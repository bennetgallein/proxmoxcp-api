/**
 * a package is a preset of specs for a server
 * @type id the unique id of the package
 */
export type Package = {
  /**
   * the unique id of the package
   */
  id: number;
  /**
   * a displayable name
   */
  name: string;
  /**
   * the defined price
   */
  price: string;
  /**
   * number of cpu cores
   */
  cpu: number;
  /**
   * amount of memory in MB
   */
  ram: number;
  /**
   * size of the disk in GB
   */
  disk: number;
  /**
   * array of freely definable meta
   */
  meta: PackageMeta[];
  /**
   * internal sort id
   */
  sort: number;
  /**
   * type of the package, either STATIC or DYNAMIC.
   *
   * STATIC packages are bound to a single template
   * DYNAMIC packages are packages where the template can be freely selected
   *
   */
  type: PackageType;
  /**
   * if type is STATIC, this holds the VMID of the template it is associated with
   */
  templateId: number | null;
};

/**
 * meta is a key-value json object that has freely defined attributes
 */
export type PackageMeta = { [key: string]: string };

/**
 * type of the package, either STATIC or DYNAMIC.
 *
 * STATIC packages are bound to a single template
 * DYNAMIC packages are packages where the template can be freely selected
 *
 */
export enum PackageType {
  'STATIC',
  'DYNAMIC',
}
