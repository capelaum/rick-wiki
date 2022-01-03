import {
  Badge,
  Flex,
  GridItem,
  Heading,
  Image,
  LightMode,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  MdLocationOn,
  MdOutlineTripOrigin,
  MdPerson,
  MdCoronavirus,
  MdHome,
} from "react-icons/md";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { RiAliensFill, RiQuestionFill } from "react-icons/ri";
import { FaRobot, FaRedditAlien } from "react-icons/fa";
import { GiGreekTemple, GiAlienSkull } from "react-icons/gi";

import { CardInfo } from "./CardInfo";

import { Result } from "../../utils/types";
import { IconType } from "react-icons";

interface CardProps {
  result: Result;
}

export function Card({ result }: CardProps) {
  const boxBackground = useColorModeValue("gray.50", "gray.700");
  const { name, image, status, origin, location, gender, species } = result;

  function setGenderIcon(): IconType {
    switch (gender) {
      case "Male":
        return BsGenderMale;
      case "Female":
        return BsGenderFemale;
      case "Genderless":
        return MdOutlineTripOrigin;
      case "Unknown":
        return RiQuestionFill;
      default:
        return RiQuestionFill;
    }
  }

  function setEspeciesIcon(): IconType {
    switch (species) {
      case "Alien":
        return RiAliensFill;
      case "Human":
        return MdPerson;
      case "Humanoid":
        return FaRedditAlien;
      case "Robot":
        return FaRobot;
      case "Mythological Creature":
        return GiGreekTemple;
      case "Cronenberg":
        return GiAlienSkull;
      case "Disease":
        return MdCoronavirus;
      case "Unknown":
        return RiQuestionFill;
      default:
        return RiQuestionFill;
    }
  }

  return (
    <GridItem
      bg={boxBackground}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      position="relative"
      border="1px solid"
      borderColor="cyan.600"
      maxW="sm"
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
        <CardInfo text={gender} icon={setGenderIcon()} title="Gender" />
        <CardInfo text={location.name} icon={MdLocationOn} title="Location" />
        <CardInfo text={origin.name} icon={MdHome} title="Origin" />
        <CardInfo text={species} icon={setEspeciesIcon()} title="Species" />
      </Flex>
    </GridItem>
  );
}
