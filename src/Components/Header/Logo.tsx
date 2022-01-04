import Link from "next/link";
import Image from "next/image";

import { Heading, Text, useColorModeValue } from "@chakra-ui/react";

import Rick_Morty_Logo from "../../../public/rick_icon.png";

export function Logo() {
  const cyanColor = useColorModeValue("cyan.600", "cyan");

  return (
    <Link href="/" passHref>
      <Heading
        as="h1"
        display="flex"
        size="lg"
        cursor="pointer"
        alignItems="center"
      >
        <Image
          src={Rick_Morty_Logo}
          alt="Rick and Morty Wiki"
          layout="fixed"
          width={55}
          height={55}
        />
        <Text
          as="span"
          pl={2}
          color={cyanColor}
          _hover={{ filter: "brightness(0.9)" }}
          transition="filter 0.3s"
        >
          Wiki
        </Text>
      </Heading>
    </Link>
  );
}
