import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import valueInMode from "utils/valueInMode";

interface Props {
  children: React.ReactNode;
  slug?: string;
}

const GameCardContainer = ({ children, slug }: Props) => {
  return (
    <Link to={`/games/${slug}`}>
      <Box
        borderRadius={8}
        overflow="hidden"
        border={valueInMode("1px")}
        borderColor={valueInMode("gray.300")}
        _hover={{
          transform: "scale(1.03)",
          transition: "transform .15s ease-in ",
        }}
      >
        {children}
      </Box>
    </Link>
  );
};

export default GameCardContainer;
