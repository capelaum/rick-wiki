import { chakra, Flex, Heading, useColorModeValue } from "@chakra-ui/react";

interface LocationsHeaderProps {}

export function LocationsHeader() {
  const textColor = useColorModeValue("gray.700", "gray.200");
  const spanColor = useColorModeValue("cyan.600", "cyan");

  return (
    <Flex direction="column" w="full" py={8} alignItems="center">
      <Heading
        as="h1"
        fontSize={["md", "2xl", "3xl"]}
        color={textColor}
        pb={4}
        textAlign="center"
      >
        Location: <chakra.span color={spanColor}>Location Name</chakra.span>
      </Heading>
      <Heading
        as="h2"
        fontSize={["md", "lg"]}
        color={textColor}
        textAlign="center"
        pb={4}
      >
        Dimension: <chakra.span color={spanColor}>Dimension Name</chakra.span>
      </Heading>
      <Heading
        as="h3"
        fontSize={["sm", "md"]}
        color={textColor}
        textAlign="center"
      >
        Type: <chakra.span color={spanColor}>Type</chakra.span>
      </Heading>
    </Flex>
  );
}
