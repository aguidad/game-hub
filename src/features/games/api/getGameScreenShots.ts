import { useQuery } from "@tanstack/react-query";

import APIClient from "api/api-client";
import endpoints from "api/endpoints";

import ApiResponse from "types/ApiResponse";
import { Screenshot } from "types/Screenshot";

const apiClient = new APIClient<ApiResponse<Screenshot>>(endpoints.games);

interface Props {
  gameId: string;
  gameSlug: string;
}

const useGameScreenShots = ({ gameId, gameSlug }: Props) => {
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => apiClient.get(gameId + "/screenshots"),
    onSuccess() {
      history.replaceState("", "", `${gameSlug}`);
    },
  });
};

export default useGameScreenShots;
