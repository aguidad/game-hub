import { useQuery } from "@tanstack/react-query";

import apiClient from "api/api-client";
import endpoints from "api/endpoints";
import platforms from "data/platforms";

import ApiResponse from "entities/ApiResponse";
import { Platform } from "entities/Game";

const usePlatform = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<ApiResponse<Platform>>(endpoints.platforms)
        .then((r) => r.data),
    staleTime: 24 * 60 * 60 * 1000, // 24
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatform;
