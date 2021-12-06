import {
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { Cards } from "../Components/Cards";

import { Filters } from "../Components/Filters";
import { Search } from "../Components/Search";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Flex
        justifyContent="center"
        alignItems="center"
        bg="gray.700"
        width="100vw"
        py={[5]}
      >
        <Container maxW="1200px">
          <Flex justifyContent="space-between" bg="gray.700">
            <Heading as="h1" display="flex">
              Rick & Morty
              <Text pl={2} color="cyan">
                Wiki
              </Text>
            </Heading>
            <Flex>
              <Button mr={10} colorScheme={"cyan"}>
                Characters
              </Button>
              <Button mr={10} colorScheme={"cyan"}>
                Episodes
              </Button>
              <Button colorScheme={"cyan"}>Locations</Button>
            </Flex>
          </Flex>
        </Container>
      </Flex>

      <Container maxW="1200px" bg="blue">
        <Search></Search>

        <Grid templateColumns="repeat(2, 1fr 10fr)" gap={10} w="100%">
          <Filters></Filters>
          <Cards></Cards>
        </Grid>
      </Container>
    </>
  );
}
