import { chakra, Flex, Heading, useColorModeValue } from "@chakra-ui/react";

import { Location } from "../../utils/types";

interface LocationsHeaderProps {
  location: Location;
}

export function LocationsHeader({ location }: LocationsHeaderProps) {
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
        Location: <chakra.span color={spanColor}>{location.name}</chakra.span>
      </Heading>
      <Heading
        as="h2"
        fontSize={["md", "lg"]}
        color={textColor}
        textAlign="center"
        pb={4}
      >
        Dimension:{" "}
        <chakra.span color={spanColor}>{location.dimension}</chakra.span>
      </Heading>
      <Heading
        as="h3"
        fontSize={["sm", "md"]}
        color={textColor}
        textAlign="center"
      >
        Type: <chakra.span color={spanColor}>{location.type}</chakra.span>
      </Heading>
    </Flex>
  );
}
