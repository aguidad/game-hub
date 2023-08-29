import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "src/store";
import usePlatform from "../api/getPlatform";
import useGenre from "features/genres/api/getGenre";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genre);
  const platformId = useGameQueryStore((s) => s.gameQuery.platform);

  const selectedPlatform = usePlatform(platformId);
  const selectedGenre = useGenre(genreId);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return <Heading fontSize="5xl">{heading}</Heading>;
};

export default GameHeading;
