import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import platformsApi from "api/platformsApi";
import platforms from "data/platforms";

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: platformsApi.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
};

export default usePlatforms;
