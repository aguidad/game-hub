import { HStack, Heading, Image } from "@chakra-ui/react";
import { Link, List, ListItem, Text } from "@chakra-ui/react";

import croppedImageUrl from "utils/image-url";
import Genre from "entities/Genre";
import genres from "data/genres";

import GenresSkeleton from "./GenresSkeleton";

interface Props {
  setSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre;
}

const Genres = ({ selectedGenre, setSelectedGenre }: Props) => {
  if (genres.length === 0) return <GenresSkeleton />;

  return (
    <List>
      <Heading fontSize="2xl" mb={5}>
        Genres
      </Heading>
      {genres.map(({ id, name, image_background }, i) => (
        <ListItem key={id} py={1}>
          <HStack>
            <Image
              boxSize={8}
              borderRadius={10}
              objectFit="cover"
              src={croppedImageUrl(image_background)}
            />
            <Link onClick={() => setSelectedGenre(genres[i])}>
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
