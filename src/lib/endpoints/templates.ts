import { XiorInstance } from "xior";

import { DataProvider } from "../common/data.provider";

export class Templates extends DataProvider {
  constructor(readonly client: XiorInstance) {
    super(client);
  }

  /**
   * list all templates
   *
   * @returns
   */
  public async list() {
    const { data: templates } = await this.client.get('api/host/load-isos');
    return templates;
  }
}
