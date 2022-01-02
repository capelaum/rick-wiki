import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

interface SearchProps {}

export function Search() {
  return (
    <Flex
      my={10}
      w="100%"
      maxW="600px"
      flexDirection="column"
      alignItems="center"
    >
      <Heading
        as="h2"
        pb="20px"
        size="lg"
        color={useColorModeValue("gray.700", "gray.200")}
      >
        Characters
      </Heading>
      <Flex w="100%">
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
    </Flex>
  );
}
