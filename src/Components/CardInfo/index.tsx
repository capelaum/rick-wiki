import {
  chakra,
  Flex,
  Heading,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { IconType } from "react-icons";

import { MdLocationOn } from "react-icons/md";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

interface CardInfoProps {
  icon: IconType;
  text: string;
}

export function CardInfo({ icon, text }: CardInfoProps) {
  return (
    <Flex
      alignItems="center"
      mt={4}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Icon
        as={icon}
        h={4}
        w={4}
        title="Gender | Locaation | Origin | Species"
        color="cyan.600"
      />

      <Heading as="h2" px={2} fontSize="md">
        {text}
      </Heading>
    </Flex>
  );
}
