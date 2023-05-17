import { useState } from "react";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";

import PlatformSelector from "components/selector/PlatformSelector";
import RateSelector from "components/selector/RateSelector";
import Genres from "components/genres";
import NavBar from "components/NavBar";
import Games from "components/games";

import { GameQuery, Platform } from "entities/Game";
import Genre from "entities/Genre";
import GameHeading from "components/games/GameHeading";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  function setSelectedGenre(genre: Genre) {
    setGameQuery((game) => ({ ...game, genre }));
  }

  function setSelectedPlatform(platform: Platform) {
    setGameQuery((game) => ({ ...game, platform }));
  }

  function onSorting(orderBy: string) {
    setGameQuery((game) => ({ ...game, orderBy }));
  }

  function setSearchText(searchText: string) {
    setGameQuery((game) => ({ ...game, searchText }));
  }

  return (
    <>
      <Grid
        templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}
        gridTemplateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area="nav">
          <NavBar onSearch={setSearchText} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" p={2}>
            <Genres
              selectedGenre={gameQuery.genre}
              setSelectedGenre={setSelectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box px={5}>
            <GameHeading gameQuery={gameQuery} />
            <Flex py={5}>
              <Box mr={10}>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  setSelectedPlatform={setSelectedPlatform}
                />
              </Box>
              <RateSelector sortBy={gameQuery.orderBy} setSortBy={onSorting} />
            </Flex>
          </Box>
          <Games gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
