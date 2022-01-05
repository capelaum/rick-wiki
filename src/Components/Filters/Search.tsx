import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  chakra,
  Flex,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

interface SearchProps {
  handleSearch: (value: string) => void;
  search: string;
}

export function Search({ handleSearch, search }: SearchProps) {
  const cyanColor = useColorModeValue("cyan.600", "cyan");
  const [value, setValue] = useState("");

  const handleSearchSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch(event.target["character"].value);
  };

  useEffect(() => {
    handleSearch(value);
  }, [value, handleSearch]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <chakra.form onSubmit={(e) => handleSearchSubmit(e)}>
      <Flex w={["full", "full", "full", "550px"]}>
        <VisuallyHidden>
          <FormLabel htmlFor="character">Search character</FormLabel>
        </VisuallyHidden>
        <InputGroup>
          <Input
            id="character"
            name="character"
            title="Search character"
            placeholder="Search for characters"
            size="md"
            borderColor={cyanColor}
            type="text"
            onChange={(e) => handleChange(e)}
            value={value}
            _hover={{
              outline: "none",
            }}
            _focus={{
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
              colorScheme="ghost"
              color={cyanColor}
              variant="solid"
              type="submit"
              _focus={{
                outline: "none",
              }}
              _hover={{
                outline: "none",
              }}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </chakra.form>
  );
}
