import Link from "next/link";
import Image from "next/image";

import { Heading, Text, useColorModeValue } from "@chakra-ui/react";

import Rick_Morty_Logo from "../../../public/Rick_and_Morty_logo.svg";

export function Logo() {
  const cyanColor = useColorModeValue("cyan.600", "cyan");

  return (
    <Link href="/" passHref>
      <Heading
        as="h1"
        display="flex"
        size="lg"
        cursor="pointer"
        pb={[0, 4, 0]}
        alignItems="center"
        maxW="220px"
      >
        <Image src={Rick_Morty_Logo} alt="Rick and Morty Wiki" />
        <Text as="span" pl={2} color={cyanColor}>
          Wiki
        </Text>
      </Heading>
    </Link>
  );
}
