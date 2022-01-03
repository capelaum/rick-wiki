import { useState, FormEvent, ChangeEvent } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

interface SearchProps {
  onSearch: (value: string) => void;
  setPage: (page: number) => void;
  search: string;
}

export function Search({ onSearch, search, setPage }: SearchProps) {
  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSearch(event.target["character"].value);
    setPage(1);
  };

  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <Flex w={["full", "full", "full", "550px"]}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={SearchIcon} color="gray.500" h={4} w={4} title="Search" />
          </InputLeftElement>
          <Input
            id="character"
            name="character"
            placeholder="Search for characters"
            size="md"
            borderColor="cyan.600"
            focusBorderColor="cyan.700"
            type="text"
            onChange={(e) => {
              onSearch(e.target.value);
              setPage(1);
            }}
            _placeholder={{
              color: "gray.500",
              fontSize: "lg",
            }}
          />
        </InputGroup>
        <Button
          ml={4}
          colorScheme="cyan"
          variant="solid"
          size="md"
          type="submit"
        >
          Search
        </Button>
      </Flex>
    </form>
  );
}
