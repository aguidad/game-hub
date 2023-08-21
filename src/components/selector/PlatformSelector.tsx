import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import { Platform } from "entities/Game";
import usePlatform from "hooks/usePlatform";

interface Props {
  selectedPlatform: Platform;
  setSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, setSelectedPlatform }: Props) => {
  const { data: platforms } = usePlatform();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map(({ id, name }, i) => (
          <MenuItem
            key={id}
            onClick={() => setSelectedPlatform(platforms?.results[i])}
          >
            {name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
