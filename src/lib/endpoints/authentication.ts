import { XiorInstance } from 'xior';

import { DataProvider } from '../common/data.provider';
import { LoginRequest, LoginResponse } from '../types/authentication.types';

export class Authentication extends DataProvider {
  constructor(readonly client: XiorInstance) {
    super(client);
  }

  /**
   * send a login request to return a token.
   *
   * if the `twoRequired` response field is true, 2FA is enabled
   * for the user account and you need to post the `code` field,
   * holding the 2FA code for the user
   *
   * @param data
   * @returns
   */
  public async login(data: LoginRequest) {
    return this.client.post<LoginResponse>(`/login`, data);
  }
}
