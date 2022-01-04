import {
  chakra,
  Flex,
  Heading,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../Components/Header";

export default function Locations() {
  const textColor = useColorModeValue("gray.700", "gray.200");
  const spanColor = useColorModeValue("cyan.600", "cyan");

  return (
    <>
      <Head>
        <title>Rick & Morty Wiki | Episodes</title>
      </Head>
      <Header />

      <Container maxW="1240px" centerContent px="1.25rem">
        <Flex direction="column" w="full" py={8} alignItems="center">
          <Heading
            as="h1"
            fontSize={["md", "2xl", "3xl"]}
            color={textColor}
            pb={4}
            textAlign="center"
          >
            Location: <chakra.span color={spanColor}>Location Name</chakra.span>
          </Heading>
          <Heading
            as="h2"
            fontSize={["md", "lg"]}
            color={textColor}
            textAlign="center"
            pb={4}
          >
            Dimension:{" "}
            <chakra.span color={spanColor}>Dimension Name</chakra.span>
          </Heading>
          <Heading
            as="h3"
            fontSize={["sm", "md"]}
            color={textColor}
            textAlign="center"
          >
            Type: <chakra.span color={spanColor}>Type</chakra.span>
          </Heading>
        </Flex>
      </Container>
    </>
  );
}
