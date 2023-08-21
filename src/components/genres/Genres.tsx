import { HStack, Heading, Image } from "@chakra-ui/react";
import { Link, List, ListItem, Text } from "@chakra-ui/react";

import croppedImageUrl from "utils/image-url";
import Genre from "entities/Genre";

import GenresSkeleton from "./GenresSkeleton";
import useGenre from "hooks/useGenre";

interface Props {
  setSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre;
}

const Genres = ({ selectedGenre, setSelectedGenre }: Props) => {
  const { data: genres } = useGenre();
  if (genres?.results.length === 0) return <GenresSkeleton />;
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
            <Link onClick={() => setSelectedGenre(genres.results[i])}>
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
