import { XiorInstance } from 'xior';

import { DataProvider } from '../common/data.provider';
import {
  CalculationRequest,
  CalculationResponse,
  CalculatorOptionsResponse,
  PurchaseRequest,
  PurchaseResponse,
} from '../types/calculator.types';

export class Calculator extends DataProvider {
  constructor(readonly client: XiorInstance) {
    super(client);
  }

  /**
   * get a list of available cpu/ram/disk options for the provided template
   *
   * @param templateVmId the VMID of the tempalte, NOT the id
   * @param charges array of charge IDs that you want to include into the calculation
   * @returns
   */
  public async getOrderOptions(templateVmId?: string, charges?: number[]) {
    return this.client.post<CalculatorOptionsResponse>(`/api/order/get-specs`, {
      os: templateVmId,
      options: JSON.stringify(charges),
    });
  }

  /**
   * calculate the price of a server
   *
   * @param request
   * @returns
   */
  public async calculate(request: CalculationRequest) {
    return this.client.post<CalculationResponse>(`/api/order/calc`, request);
  }

  /**
   * send a purchase request, if you provide a package, you can leave the cpu, ram and disk fields empty
   *
   * ssh keys are optional as well
   *
   * Note that this endpoint requires authentication, which you would need to provide
   * via the `token` parameter when initializing the client.
   *
   * @param request
   * @returns
   */
  public async purchase(request: PurchaseRequest) {
    return this.client.post<PurchaseResponse>(`/api/order/purchase`, {
      ...request,
      options: JSON.stringify(request.options),
    });
  }
}
