export default interface InitialState {
  id?: string;
  name: string;
  username: string;
  email: string;
  phone: string | number;
  website: string;
}

interface MyGeo {
  lat: string;
  lng: string;
}

export interface MyAddress {
  street: string | number;
  suite: string;
  city: string;
  zipcode: string;
  geo: MyGeo;
}

export interface MyCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
