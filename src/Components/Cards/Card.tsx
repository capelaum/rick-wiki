import { useEffect, useState } from "react";
import {
  Badge,
  Flex,
  GridItem,
  Heading,
  Image,
  LightMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { Character } from "../../utils/types";

import { CardInfo } from "./CardInfo";
import { Loading } from "./Loading";

interface CardProps {
  character: Character;
}

export function Card({ character }: CardProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [character]);

  const { name, image, status, origin, location, gender, species } = character;
  const boxBackground = useColorModeValue("white", "gray.700");
  const cyanColor = useColorModeValue("cyan.600", "cyan");
  const cardShadow = useColorModeValue(
    "rgba(0, 255, 255, 0.4) 0px 2px 4px, rgba(0, 255, 255, 0.3) 0px 7px 13px -3px, rgba(0, 255, 255, 0.2) 0px -3px 0px inset;",
    "rgba(0, 255, 255, 0.4) 0px 2px 4px, rgba(0, 255, 255, 0.3) 0px 7px 13px -3px, rgba(0, 255, 255, 0.2) 0px -3px 0px inset;",
  );

  return isLoading ? (
    <Loading />
  ) : (
    <GridItem
      bg={boxBackground}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      position="relative"
      border="1px solid"
      borderColor={cyanColor}
      w={["full", "250px"]}
      boxShadow={cardShadow}
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
          fontSize="0.75rem"
          rounded="md"
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
