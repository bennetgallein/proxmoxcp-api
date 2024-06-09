/**
 * Login request DTO
 */
export interface LoginRequest {
  /**
   * the email of the customer to login with
   */
  email: string;
  /**
   * the password to login with
   */
  password: string;
  /**
   * the 2FA code if required
   */
  code?: string;
}

/**
 * the login response object
 */
export type LoginResponse = {
  /**
   * if a error occured, this will be true
   */
  error: boolean;
  /**
   * the response message, holds error or response message
   */
  msg: string;
  /**
   * if true, 2FA is enabled and should be posted along the request
   * in the code field
   */
  twoRequired?: boolean;
  /**
   * the API token on successfull login. This can authenticate
   * the customer in further requests
   */
  token?: string;
};
