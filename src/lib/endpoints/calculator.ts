import { XiorInstance } from 'xior';

import { DataProvider } from '../common/data.provider';
import {
  CalculationRequest,
  CalculationResponse,
  CalculatorOptionsResponse,
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
}
