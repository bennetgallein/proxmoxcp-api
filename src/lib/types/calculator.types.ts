export type CalculatorOptionsResponse = {
  cpu: CalculatorOptionItem[];
  ram: CalculatorOptionItem[];
  disk: CalculatorOptionItem[];
};

export type CalculatorOptionItem = {
  value: number;
  text: string;
  selected: boolean;
};

export type CalculationRequest = {
  cpu: number;
  ram: number;
  disk: number;
  os: number;
  voucher: string;
  options: number[];
};

export type CalculationResponse = {
  rawprice: string;
  price: string;
  charges: Charge[];
  hasCreationTimes: boolean;
  creationTime: false | string;
  _creationTime: false | number;
  calc: Pick<CalculationRequest, 'cpu' | 'ram' | 'disk'>;
  configurableCharges: Charge[];
};

export type Charge = {
  id: number;
  price: string;
  type: number;
  calcType: number;
  calcOnly: number;
  osid: number | null;
  recurring: number;
  description: string;
  active: number;
  descriptionRaw: string;
};

/**
 * body to send as the purchase request
 */
export type PurchaseRequest = {
  /**
   * ID of the package that is to be purchased
   */
  package?: number;
  /**
   * number of cores
   */
  cpu?: number;
  /**
   * amount of memory
   */
  ram?: number;
  /**
   * amount of disk
   */
  disk?: number;
  /**
   * vmid of the OS
   */
  os: number;
  /**
   * hostname
   */
  hostname: string;
  /**
   * password
   */
  password: string;
  /**
   * password confirmation
   */
  confirm_password: string;
  /**
   * ID of the users ssh key
   */
  ssh?: number;
  /**
   * optional voucher
   */
  voucher: string;
  /**
   * array of additional charges options
   */
  options: number[];
};

/**
 * the response of the purchase endpoint
 */
export type PurchaseResponse = {
  /**
   * boolean wether there is a error
   */
  error: boolean;
  /**
   * the response message, would be an error
   * message or the success message
   */
  message: string;
  /**
   * if the request suceeded, this will be
   * the URL to redirect the user to
   */
  redirect?: string;
};
