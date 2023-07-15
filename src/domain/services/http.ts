import API from '../../config/api'
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL:API.baseurl
});

type HTTPRequestConfig = AxiosRequestConfig;
 
const api = (axios: AxiosInstance) => {

  return {
    get: <T>(url: string, config: HTTPRequestConfig = {}) => {
      return axios.get<T>(url, config)
    },
  };
};


export const Http = api(instance);