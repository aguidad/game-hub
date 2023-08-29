import { Grid, GridItem, Image } from "@chakra-ui/react";
import { Screenshot } from "types/Screenshot";

interface Props {
  screens: Screenshot[];
}

const ScreenShots = ({ screens }: Props) => {
  return (
    <Grid
      gridTemplateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
      gap={5}
    >
      {screens.map(({ image, id }) => {
        return (
          <GridItem key={id.toString()}>
            <Image
              bg="gray.600"
              borderRadius={10}
              src={image}
              width="100%"
              height="100%"
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default ScreenShots;
