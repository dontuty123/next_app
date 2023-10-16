/** @format */

import axios, { AxiosInstance } from "axios";

class UserHttp {
  instace: AxiosInstance;
  constructor() {
    this.instace = axios.create({
      baseURL: "https://reqres.in/",
    });
  }
}

const userHttp = new UserHttp().instace;
export default userHttp;