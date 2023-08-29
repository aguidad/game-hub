import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatform from "features/games/api/getPlatform";
import usePlatforms from "features/games/api/getPlatforms";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "src/store";

const PlatformSelector = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platform);
  const setSelectedPlatform = useGameQueryStore((s) => s.setSelectedPlatform);

  const { data: platforms } = usePlatforms();
  const selectedPlatform = usePlatform(platformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map(({ id, name }, i) => (
          <MenuItem
            key={id}
            onClick={() => setSelectedPlatform(platforms?.results[i].id)}
          >
            {name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
