import { chakra, Flex, Heading, useColorModeValue } from "@chakra-ui/react";

import { Episode } from "../../utils/types";

interface EpisodesHeaderProps {
  episode: Episode;
}

export function EpisodesHeader({ episode }: EpisodesHeaderProps) {
  const textColor = useColorModeValue("gray.700", "gray.200");
  const spanColor = useColorModeValue("cyan.600", "cyan");

  return (
    <Flex direction="column" w="full" py={8} alignItems="center">
      <Heading
        as="h1"
        fontSize={["xl", "2xl", "3xl"]}
        color={textColor}
        pb={4}
        textAlign="center"
      >
        Episode: <chakra.span color={spanColor}>{episode.name}</chakra.span>
      </Heading>
      <Heading
        as="h2"
        fontSize={["md", "lg"]}
        color={textColor}
        textAlign="center"
      >
        Air Date:{" "}
        <chakra.span color={spanColor}>{episode.air_date}</chakra.span>
      </Heading>
    </Flex>
  );
}
