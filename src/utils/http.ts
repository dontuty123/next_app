/** @format */

import axios, { AxiosInstance } from "axios";

class Http {
  instace: AxiosInstance;
  constructor() {
    this.instace = axios.create({
      baseURL: "https://65276e29917d673fd76daf4d.mockapi.io/",
    });
  }
}

const http = new Http().instace;
export default http;
