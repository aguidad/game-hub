import {
  HStack,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

import croppedImageUrl from "utils/image-url";

import useGameQueryStore from "../../../store";
import useGenres from "../api/getGenres";
import useGenre from "../api/getGenre";

const Genres = () => {
  const genreId = useGameQueryStore((store) => store.gameQuery.genre);
  const setSelectedGenre = useGameQueryStore((store) => store.setSelectedGenre);
  const { data: genres } = useGenres();
  const selectedGenre = useGenre(genreId);

  return (
    <List>
      <Heading fontSize="2xl" mb={5}>
        Genres
      </Heading>
      {genres?.results.map(({ id, name, image_background }, i) => (
        <ListItem key={id} py={1}>
          <HStack>
            <Image
              boxSize={8}
              borderRadius={10}
              objectFit="cover"
              src={croppedImageUrl(image_background)}
            />
            <Link onClick={() => setSelectedGenre(genres?.results[i].id)}>
              <Text
                whiteSpace="nowrap"
                fontWeight={selectedGenre?.name === name ? "bold" : "normal"}
                fontSize={selectedGenre?.name === name ? "lg" : "md"}
              >
                {name}
              </Text>
            </Link>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default Genres;
