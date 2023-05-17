import { SimpleGrid } from "@chakra-ui/react";

import endpoints from "api/endpoints";
import useApi from "hooks/useApi";
import Game, { GameQuery } from "entities/Game";

import GamesSkeletons from "./GameCardSkeleton";
import GameCard from "./GameCard";

const skeletons = ["1", "2", "3", "4", "5", "6", "7", "8"];

interface Props {
  gameQuery: GameQuery;
}

const Games = ({ gameQuery }: Props) => {
  const { data: games, isLoading } = useApi<Game>(
    endpoints.games,
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.orderBy,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

  return (
    <SimpleGrid
      spacing={6}
      padding={5}
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
    >
      {(games.length === 0 || isLoading) &&
        skeletons.map((e) => <GamesSkeletons key={e} />)}
      {games.map((game) => {
        return <GameCard key={"" + game.id} game={game} />;
      })}
    </SimpleGrid>
  );
};

export default Games;
