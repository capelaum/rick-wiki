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

      <Container maxW="1200px" bg="blue">
        <Search></Search>

        <Grid
          templateColumns="repeat(5, 1fr)"
          gap={10}
          overflow="hidden"
          py={6}
        >
          <Filters></Filters>
          <Cards />
        </Grid>
      </Container>
    </>
  );
}
