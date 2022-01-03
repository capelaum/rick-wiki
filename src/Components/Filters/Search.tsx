import { useState, FormEvent, ChangeEvent } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
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
            _hover={{
              outline: "none",
            }}
            _placeholder={{
              color: "gray.500",
              fontSize: "lg",
            }}
          />
          <InputRightElement>
            <IconButton
              aria-label="Search database"
              icon={<SearchIcon />}
              colorScheme="cyan"
              color="cyan.600"
              variant="ghost"
              type="submit"
              _focus={{
                outline: "none",
              }}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </form>
  );
}
