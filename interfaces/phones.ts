export interface IPhone {
  _id: string;
  color: string;
  description: string;
  img?: string;
  manuFacturer: string;
  name: string;
  price: string;
  processor: string;
  ram: string;
  screen: string;
}

export interface IPhoneList {
  _id: string;
  name: string;
  manuFacturer: string;
  img?: string;
}
