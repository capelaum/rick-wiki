import {
  Box,
  chakra,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

import { FaHeart } from "react-icons/fa";

import { ColorModeButton } from "../ColorModeButton";
import { Logo } from "../Header/Logo";

export function Footer() {
  const backgroundColor = useColorModeValue("white", "gray.700");
  const cyanColor = useColorModeValue("cyan.600", "cyan");
  const grayColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Flex
      as="footer"
      bg={backgroundColor}
      borderTop="1px"
      borderColor={cyanColor}
      pt="0.5rem"
      pb="0.25rem"
      justifyContent="center"
      alignItems="center"
      px={["0.5rem", "1.25rem"]}
    >
      <Flex
        maxWidth="1200px"
        w="full"
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo />

        <Text color={grayColor} align="right" w="full" fontSize="md">
          Made with <Icon as={FaHeart} color={cyanColor} /> <br />
          <Link href="https://github.com/capelaum" passHref>
            <chakra.a _hover={{ color: cyanColor }} target="_blank" noreferrer>
              Luís Vinicius Capelletto
            </chakra.a>
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
}
