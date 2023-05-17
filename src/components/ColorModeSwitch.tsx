import { HStack, IconButton, useColorMode } from "@chakra-ui/react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === "light";

  return (
    <HStack>
      <IconButton
        border={0}
        fontSize="25px"
        variant="outline"
        aria-label="sw mode"
        colorScheme={isLight ? "blackAlpha" : "yellow"}
        icon={isLight ? <MdDarkMode /> : <MdLightMode />}
        onClick={toggleColorMode}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
