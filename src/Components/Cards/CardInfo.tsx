import { Flex, Heading, Icon, useColorModeValue } from "@chakra-ui/react";

import { IconType } from "react-icons";

import {
  MdLocationPin,
  MdOutlineTripOrigin,
  MdPerson,
  MdCoronavirus,
  MdHome,
} from "react-icons/md";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { RiAliensFill, RiQuestionFill } from "react-icons/ri";
import { FaRobot, FaRedditAlien, FaPoop } from "react-icons/fa";
import { GiGreekTemple, GiAlienSkull, GiAnimalHide } from "react-icons/gi";

interface CardInfoProps {
  text: string;
  title: string;
}

export function CardInfo({ text, title }: CardInfoProps) {
  function setIcon(): IconType {
    if (title === "Location") {
      return MdLocationPin;
    }

    if (title === "Origin") {
      return MdHome;
    }

    switch (text) {
      case "Male":
        return BsGenderMale;
      case "Female":
        return BsGenderFemale;
      case "Genderless":
        return MdOutlineTripOrigin;
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
      case "Poopybutthole":
        return FaPoop;
      case "Animal":
        return GiAnimalHide;
      case "Unknown":
        return RiQuestionFill;
      default:
        return RiQuestionFill;
    }
  }

  return (
    <Flex
      alignItems="center"
      _notLast={{
        marginBottom: "1rem",
      }}
    >
      <Icon as={setIcon()} h={5} w={5} title={title} color="cyan.600" />

      <Heading
        as="h2"
        px={2}
        fontSize="md"
        color={useColorModeValue("gray.700", "gray.200")}
      >
        {text}
      </Heading>
    </Flex>
  );
}
