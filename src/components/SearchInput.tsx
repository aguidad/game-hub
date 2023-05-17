import { useRef } from "react";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  console.log(ref.current?.value);
  return (
    <Box flex={1}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ref.current?.blur();
          onSearch(ref.current?.value || "");
        }}
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <BsSearch />
          </InputLeftElement>
          <Input
            ref={ref}
            placeholder="Search games..."
            variant="filled"
            borderRadius={20}
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
