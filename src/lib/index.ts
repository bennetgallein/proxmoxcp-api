import { xior, XiorInstance } from 'xior';

import { Calculator } from './endpoints/calculator';
import { Packages } from './endpoints/packages';
import { Templates } from './endpoints/templates';

export class ProxmoxCpApi {
  private instance: XiorInstance | null = null;

  /**
   * create a new ProxmoxCpApi Instance. This is required for any further request.
   *
   * The token is optional and can be empty, Its not used and only exists as a placeholder for future expansion
   *
   * @param baseUrl the baseUrl where you ProxmoxCP live at.
   * @param token
   * @param instance a Xior Instance that can overwrite the instance
   */
  constructor(
    private readonly baseUrl: string,
    private readonly token?: string,
    instance?: XiorInstance
  ) {
    if (!instance) {
      this.instance = xior.create({
        baseURL: baseUrl,
      });
    } else {
      this.instance = instance;
    }
  }

  /**
   * return an instance of the packages class
   */
  public packages() {
    return new Packages(this.instance!);
  }

  /**
   * return an instance of the templates class
   */
  public templates() {
    return new Templates(this.instance!);
  }

  /**
   * return an instance of the calculator class
   * @returns
   */
  public calculator() {
    return new Calculator(this.instance!);
  }

  /**
   * get the current baseUrl
   * @returns
   */
  public getBaseUrl() {
    return this.baseUrl;
  }

  /**
   * get the token
   * @returns token
   */
  public getToken() {
    return this.token;
  }
}
