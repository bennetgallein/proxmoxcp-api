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
