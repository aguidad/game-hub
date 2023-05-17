import { AxiosRequestConfig } from "axios";

import { GamesApiResponse } from "entities/Game";

import apiClient from "./api-client";
import endpoints from "./endpoints";

const get = (data: AxiosRequestConfig) =>
  apiClient.get<GamesApiResponse>(endpoints.games, data);

export default {
  get,
};
