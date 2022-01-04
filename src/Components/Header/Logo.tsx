import { Heading, Text, useColorModeValue } from "@chakra-ui/react";

export function Logo() {
  const cyanColor = useColorModeValue("cyan.600", "cyan");

  return (
    <Heading
      as="h1"
      display="flex"
      size="lg"
      cursor="pointer"
      color={useColorModeValue("gray.700", "gray.200")}
      transition="all 0.3s"
      _hover={{
        color: cyanColor,
      }}
      pb={[0, 4, 0]}
    >
      Rick & Morty
      <Text as="span" pl={2} color={cyanColor}>
        Wiki
      </Text>
    </Heading>
  );
}
