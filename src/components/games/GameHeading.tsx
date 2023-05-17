import { Heading } from "@chakra-ui/react";
import { GameQuery } from "entities/Game";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return <Heading fontSize="5xl">{heading}</Heading>;
};

export default GameHeading;
