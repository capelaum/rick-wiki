import {
  Badge,
  Box,
  chakra,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

import { IconType } from "react-icons";

import { MdHeadset, MdLocationOn, MdOutlineTripOrigin } from "react-icons/md";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { RiAliensFill } from "react-icons/ri";

import { CardInfo } from "./CardInfo";

interface CardProps {
  icon: IconType;
  text: string;
}

export function Card() {
  const boxBackground = useColorModeValue("gray.50", "gray.700");

  return (
    <GridItem bg={boxBackground} shadow="lg" rounded="lg" overflow="hidden">
      <Image
        w="full"
        h={52}
        fit="cover"
        objectPosition="center"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="character"
      />

      <Flex
        justifyContent="center"
        alignItems="center"
        px={4}
        py={3}
        bg="cyan.500"
      >
        <Heading as="h2" color="white" fontWeight="bold" fontSize="lg">
          Dipper and Mabel Mortys
        </Heading>
      </Flex>

      <Box py={4} px={4}>
        <Badge colorScheme="green" variant="subtle">
          Alive
        </Badge>
        <Badge colorScheme="red" variant="subtle">
          Dead
        </Badge>
        <Badge colorScheme="purple" variant="subtle">
          Unknown
        </Badge>

        {/* <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
          Full Stack maker & UI / UX Designer , love hip hop music Author of
          Building UI.
        </chakra.p> */}

        <CardInfo text="Male" icon={BsGenderMale} />
        <CardInfo text="Citadel of Ricks" icon={MdLocationOn} />
        <CardInfo text="unknown" icon={MdOutlineTripOrigin} />
        <CardInfo text="Alien" icon={RiAliensFill} />
      </Box>
    </GridItem>
  );
}
