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
  handleSearch: (value: string) => void;
  search: string;
}

export function Search({ handleSearch, search }: SearchProps) {
  const handleSearchSSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch(event.target["character"].value);
  };

  return (
    <form onSubmit={(e) => handleSearchSSubmit(e)}>
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
            onChange={(e) => handleSearch(e.target.value)}
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
