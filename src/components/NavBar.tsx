import { HStack, Image } from "@chakra-ui/react";

import logo from "assets/logo.webp";
import ColorModeSwitch from "components/ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQueryStore from "src/store";
import { Link } from "react-router-dom";

const NavBar = () => {
  const onSearch = useGameQueryStore((s) => s.setSearchText);
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" />
      </Link>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
