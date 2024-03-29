import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "src/store";

const RateSelector = () => {
  const items = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const sortBy = useGameQueryStore((s) => s.gameQuery.orderBy);
  const setSortBy = useGameQueryStore((s) => s.onSorting);
  const currentSortLabel = items.find(({ value }) => value === sortBy)?.label;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sorted By: {currentSortLabel || "Relevance"}
      </MenuButton>
      <MenuList>
        {items.map(({ value, label }) => (
          <MenuItem key={value} value={label} onClick={() => setSortBy(value)}>
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default RateSelector;
