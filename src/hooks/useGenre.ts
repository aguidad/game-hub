import { useQuery } from "@tanstack/react-query";

import apiClient from "api/api-client";
import endpoints from "api/endpoints";
import genres from "data/genres";

import ApiResponse from "entities/ApiResponse";
import Genre from "entities/Genre";

const useGenre = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<ApiResponse<Genre>>(endpoints.genres).then((r) => r.data),
    staleTime: 24 * 60 * 60 * 1000, // 24
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenre;
