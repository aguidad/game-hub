import { AxiosRequestConfig } from "axios";

import { GenresApiResponse } from "entities/Genre";

import apiClient from "./api-client";
import endpoints from "./endpoints";

export const getGenres = (data: AxiosRequestConfig) =>
  apiClient.get<GenresApiResponse>(endpoints.genres, data);
