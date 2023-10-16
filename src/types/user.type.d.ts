/** @format */

export type TUser = {
  id?: string;
  email?: string;
  username?: string;
  password?: string;
  phone?: string;
  firstname?: string;
  lastname?: string;
  image?: string;
  city?: string;
  street?: string;
  description?: string;
  number?: number;
  zipcode?: string;
}

export interface IUserSign {
  email?: string
  username?: string
  password?: string
}
