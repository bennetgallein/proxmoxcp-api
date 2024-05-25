import { XiorInstance } from 'xior';

import { DataProvider } from '../common/data.provider';
import { Package, PackageMeta, PackageType } from '../types/packages.type';

export class Packages extends DataProvider {
  constructor(readonly client: XiorInstance) {
    super(client);
  }

  /**
   * list all packages. results are already sorted
   *
   * @returns list of packages
   */
  public async list(): Promise<Package[]> {
    const { data: packages } = await this.client.get<
      (Package & { meta: string })[]
    >('/api/packages/get');
    return packages.map((_package) => {
      let type = PackageType.DYNAMIC;
      if (_package.type == 1) {
        type = PackageType.STATIC
      }
      return {
        ..._package,
        type,
        meta: this.decodeMeta(_package.meta),
      }
    });
  }

  /**
   * meta data comes as json-string, so we need to decode
   *
   * @param meta
   * @returns
   */
  private decodeMeta(meta: string): PackageMeta[] {
    return JSON.parse(meta);
  }
}
