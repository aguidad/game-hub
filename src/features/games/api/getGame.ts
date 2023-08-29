import { useQuery } from "@tanstack/react-query";
import APIClient from "api/api-client";
import endpoints from "api/endpoints";
import Game from "src/types/Game";
import ms from "ms";

const apiClient = new APIClient<Game>(endpoints.games);

const useGame = (slug: string) => {
  const { data, ...rest } = useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });

  return { game: data, ...rest };
};

export default useGame;
