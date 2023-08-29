import {
  AspectRatio,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import ExpendableText from "components/ExpendableText";
import { useParams } from "react-router-dom";
import useGame from "../api/getGame";
import Attribute from "../components/Attribute";
import useGameTrailers from "../api/gameTrailers";
import useGameScreenShots from "../api/getGameScreenShots";
import ScreenShots from "../components/ScreenShots";
import useGameQueryStore from "src/store";
import { useEffect } from "react";

const GameDetail = () => {
  const { slug } = useParams();
  const searchGame = useGameQueryStore((s) => s.gameQuery.searchText);
  const { game, isLoading, isError, error } = useGame(searchGame || slug || "");
  const { data: trailers } = useGameTrailers("" + game?.id);
  const { data: screenshots } = useGameScreenShots({
    gameId: "" + game?.id,
    gameSlug: searchGame || game?.slug || "",
  });

  const trailer = trailers?.results[0];
  const items = [
    {
      title: "Platforms",
      items: game?.parent_platforms.map((p) => p.platform.name),
    },
    { title: "Metascore", badge: game?.metacritic },
    { title: "Genres", items: game?.genres.map((g) => g.name) },
    { title: "Publishers", items: game?.publishers.map((n) => n.name) },
  ];

  useEffect(() => {
    if (searchGame && game?.slug) history.replaceState("", "", `${game?.slug}`);
  }, [searchGame]);

  if (isLoading) return <Spinner />;
  if (isError || !game) throw error;

  return (
    <Grid
      gridTemplateRows={{ base: "repeat(1, 1fr)", lg: "repeat(1, 1fr)" }}
      gridTemplateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
      gap={2}
    >
      <GridItem rowSpan={1} colSpan={2}>
        <Heading>{game.name}</Heading>
        <ExpendableText>{game?.description_raw}</ExpendableText>

        <GridItem mt={10} rowSpan={1} colSpan={2}>
          <SimpleGrid columns={2} spacing={5}>
            {items.map(({ title, items, badge }, index) => {
              return (
                <Attribute
                  key={index.toString()}
                  title={title}
                  items={items}
                  badge={badge}
                />
              );
            })}
          </SimpleGrid>
        </GridItem>
      </GridItem>

      <GridItem rowSpan={1} colSpan={2}>
        <GridItem rowSpan={1} colSpan={2}>
          {!!trailers?.results.length && (
            <AspectRatio mb={10} maxW="100%" maxHeight={300} ratio={1}>
              <video
                controls
                title={trailer?.name}
                poster={trailer?.preview}
                src={trailer?.data.max}
                style={{ borderRadius: 10 }}
              />
            </AspectRatio>
          )}
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} />

        {!!screenshots?.results.length && (
          <GridItem rowSpan={5} colSpan={2}>
            <ScreenShots screens={screenshots?.results} />
          </GridItem>
        )}
      </GridItem>
    </Grid>
    // <HStack>
    //   <Box>
    //     <Heading>{game.name}</Heading>
    //     <ExpendableText>{game?.description_raw}</ExpendableText>
    //     <Grid
    //       templateColumns="repeat(2, 1fr)"
    //       templateRows="repeat(2, 1fr)"
    //       gap={2}
    //       mt={5}
    //     >
    //       {items.map(({ title, items, badge }, index) => {
    //         return (
    //           <GridItem key={index.toString()} as="div" my={2}>
    //             <Attribute title={title} items={items} badge={badge} />
    //           </GridItem>
    //         );
    //       })}
    //     </Grid>

    //     {!!trailers?.results.length && (
    //       <AspectRatio mt={5} maxW="100%" maxHeight={400} ratio={1}>
    //         <video
    //           controls
    //           title={trailer?.name}
    //           poster={trailer?.preview}
    //           src={trailer?.data.max}
    //           style={{ borderRadius: 10 }}
    //         />
    //       </AspectRatio>
    //     )}
    //   </Box>
    //   <Box width={100} height={100} bg="red" />
    // </HStack>
  );
};

export default GameDetail;
