/** @format */

import axios, { AxiosInstance } from "axios";

class Http {
  instace: AxiosInstance;
  constructor() {
    this.instace = axios.create({
      baseURL: "https://fakestoreapi.com/",
    });
  }
}

const http = new Http().instace;
export default http;
