/** @format */

export interface UserType {
  id?: string;
  email: string;
  username?: string;
  password: string;
  phone: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number?: number;
    zipcode: string;
    geolocation?: {
      lat?: string;
      long?: string;
    };
  };
}
