import axios, { AxiosRequestConfig } from "axios";
import endpoints from "./endpoints";

const axiosInstance = axios.create({
  baseURL: endpoints.BASE_URL,
  params: { key: "8576533b07664bae91b57dd71bcde3c6" },
});

export default class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (id: number | string) =>
    axiosInstance.get<T>(this.endpoint + "/" + id).then((r) => r.data);

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance.get<T>(this.endpoint, config).then((r) => r.data);

  post = (data: AxiosRequestConfig) =>
    axiosInstance.post<T>(this.endpoint, data).then((r) => r.data);
}
