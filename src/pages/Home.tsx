import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";

import { GameHeading, Games } from "features/games";
import Genres from "features/genres";

function Home() {
  return (
    <Grid
      templateAreas={{ base: `'main'`, lg: `'aside main'` }}
      gridTemplateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <Show above="lg">
        <GridItem area="aside" p={2}>
          <Genres />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box px={5}>
          <GameHeading />
          <Flex py={5}>
            <Box mr={10}>{/* <PlatformSelector /> */}</Box>
            {/* <RateSelector /> */}
          </Flex>
        </Box>
        <Games />
      </GridItem>
    </Grid>
  );
}

export default Home;
