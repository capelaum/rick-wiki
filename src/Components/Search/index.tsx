import {
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

interface SearchProps {}

export function Search() {
  return (
    <Flex w="full">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={SearchIcon} color="gray.500" h={4} w={4} title="Search" />
        </InputLeftElement>
        <Input
          placeholder="Search for characters"
          size="md"
          borderColor="cyan.600"
          focusBorderColor="cyan.700"
          _placeholder={{
            color: "gray.500",
            fontSize: "lg",
          }}
        />
      </InputGroup>
      <Button ml={4} colorScheme="cyan" variant="solid" size="md">
        Search
      </Button>
    </Flex>
  );
}
