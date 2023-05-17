import { Box } from "@chakra-ui/react";
import valueInMode from "utils/valueInMode";

interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={8}
      overflow="hidden"
      border={valueInMode("1px")}
      borderColor={valueInMode("gray.300")}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
