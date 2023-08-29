import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import useGameQueryStore from "../../../store";
import useGames from "../api/getGames";
import GameCard from "../components/GameCard";
import GamesSkeletons from "../components/GameCardSkeleton";

const skeletons = ["1", "2", "3", "4"];

const Games = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const {
    data: games,
    hasNextPage,
    isLoading,
    fetchNextPage,
  } = useGames({
    genres: gameQuery.genre,
    parent_platforms: gameQuery.platform,
    ordering: gameQuery.orderBy,
    search: gameQuery.searchText,
  });
  const fetchedGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  const Loader = () => {
    return (
      <SimpleGrid
        spacing={6}
        padding={5}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      >
        {skeletons.map((e) => (
          <GamesSkeletons key={e} />
        ))}
      </SimpleGrid>
    );
  };

  return (
    <InfiniteScroll
      loader={<Loader />}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      dataLength={fetchedGamesCount}
      refreshFunction={() => games?.pages.map((e) => e.results).flat()}
      pullDownToRefreshThreshold={50}
    >
      <SimpleGrid
        spacing={6}
        padding={5}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      >
        {(games?.pages.length === 0 || isLoading) &&
          skeletons.map((e) => <GamesSkeletons key={e} />)}
        {games?.pages.map((page, index) => {
          return (
            <React.Fragment key={`key~${index}`}>
              {page.results.map((game) => {
                return <GameCard key={"" + game.id} game={game} />;
              })}
            </React.Fragment>
          );
        })}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default Games;
