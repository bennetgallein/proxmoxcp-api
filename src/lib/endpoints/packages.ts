import { XiorInstance } from 'xior';

import { DataProvider } from '../common/data.provider';
import { Package, PackageMeta, PackageType } from '../types/packages.type';

export class Packages extends DataProvider {
  constructor(readonly client: XiorInstance) {
    super(client);
  }

  /**
   * list all packages
   *
   * @returns list of packages
   */
  public async list() {
    const { data: packages } = await this.client.get<(Package & { meta: string })[]>(
      '/api/packages/get'
    );
    return packages.map((_package) => ({
      ..._package,
      type: PackageType[_package.type],
      meta: this.decodeMeta(_package.meta),
    }));
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
