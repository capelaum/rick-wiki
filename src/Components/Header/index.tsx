import {
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bg="gray.700"
      width="100vw"
      py={5}
      px={[20, 2, 1, 0]}
    >
      <Container maxW="1200px" px={2}>
        <Flex justifyContent="space-between" bg="gray.700">
          <Heading
            as="h1"
            display="flex"
            size="lg"
            className="main-heading"
            cursor="pointer"
            _hover={{
              color: "cyan",
            }}
            transition="all 0.3s"
          >
            Rick & Morty
            <Text as="span" pl={2} color="cyan">
              Wiki
            </Text>
          </Heading>
          <Flex>
            <Button colorScheme={"cyan"} color="gray.800">
              Characters
            </Button>
            <Button ml={10} colorScheme={"cyan"}>
              Episodes
            </Button>
            <Button ml={10} colorScheme={"cyan"}>
              Locations
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
