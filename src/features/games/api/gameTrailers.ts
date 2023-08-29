import { useQuery } from "@tanstack/react-query";
import endpoints from "api/endpoints";
import APIClient from "api/api-client";
import ApiResponse from "types/ApiResponse";
import { Trailer } from "types/Trailer";

const apiClient = new APIClient<ApiResponse<Trailer>>(endpoints.games);

const useGameTrailers = (id: string) => {
  return useQuery({
    queryKey: ["trailers", id],
    queryFn: () => apiClient.get(id + "/movies"),
  });
};

export default useGameTrailers;
