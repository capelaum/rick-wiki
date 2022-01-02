import Head from "next/head";

import { Container, Grid, useColorMode } from "@chakra-ui/react";

import { Header } from "../Components/Header";
import { Search } from "../Components/Search";
import { Filters } from "../Components/Filters";
import { Cards } from "../Components/Cards";

export default function Home() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Rick & Morty Wiki | Home</title>
      </Head>
      <Header />

      <Container maxW="1240px" centerContent px="1rem">
        <Search />

        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={4}
          overflow="hidden"
          py={6}
          width="full"
        >
          <Filters />
          <Cards />
        </Grid>
      </Container>
    </>
  );
}
