import { useInfiniteQuery } from "@tanstack/react-query";
import gamesApi from "api/gamesApi";
import ms from "ms";

interface QueryParams {
  genres: number;
  parent_platforms: number;
  ordering: string;
  search: string;
}

const useGames = (params?: QueryParams) => {
  const isEmptyParams = !!Object.keys(params || {}).filter(
    (k) => (params as any)[k]
  ).length;

  return useInfiniteQuery({
    queryKey: !isEmptyParams ? ["games"] : ["games", { ...params }],
    queryFn: ({ pageParam = 1 }) =>
      gamesApi.getAll({ params: { ...params, page: pageParam } }),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

export default useGames;
