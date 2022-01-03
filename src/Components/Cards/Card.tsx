import {
  Badge,
  Flex,
  GridItem,
  Heading,
  Image,
  LightMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { CardInfo } from "./CardInfo";

import { Result } from "../../utils/types";

interface CardProps {
  result: Result;
}

export function Card({ result }: CardProps) {
  const boxBackground = useColorModeValue("white", "gray.700");
  const { name, image, status, origin, location, gender, species } = result;

  return (
    <GridItem
      bg={boxBackground}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      position="relative"
      border="1px solid"
      borderColor="cyan.600"
      w="280px"
    >
      <Image
        w="full"
        h={60}
        fit="cover"
        objectPosition="center"
        src={image}
        alt="character"
      />

      <Flex
        justifyContent="center"
        alignItems="center"
        px={4}
        py={3}
        bg={
          status === "Dead"
            ? "red.500"
            : status === "Alive"
            ? "green.500"
            : "purple.500"
        }
      >
        <Heading as="h2" color="white" fontWeight="bold" fontSize="lg">
          {name}
        </Heading>
      </Flex>

      <LightMode>
        <Badge
          position="absolute"
          top={2}
          right={2}
          colorScheme={
            status === "Dead" ? "red" : status === "Alive" ? "green" : "purple"
          }
          variant="solid"
        >
          {status}
        </Badge>
      </LightMode>

      <Flex py={4} px={4} justifyContent="center" flexDirection="column">
        <CardInfo text={gender} title="Gender" />
        <CardInfo text={location.name} title="Location" />
        <CardInfo text={origin.name} title="Origin" />
        <CardInfo text={species} title="Species" />
      </Flex>
    </GridItem>
  );
}
