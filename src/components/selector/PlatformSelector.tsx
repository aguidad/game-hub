import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import { Platform } from "entities/Game";
import platforms from "data/platforms";

interface Props {
  selectedPlatform: Platform;
  setSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, setSelectedPlatform }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map(({ id, name }, i) => (
          <MenuItem key={id} onClick={() => setSelectedPlatform(platforms[i])}>
            {name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
