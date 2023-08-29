import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import genresApi from "api/genresApi";
import genres from "data/genres";

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: genresApi.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });
};

export default useGenres;
