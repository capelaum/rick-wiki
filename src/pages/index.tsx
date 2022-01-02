import { useEffect, useState } from "react";
import Head from "next/head";

import { Container, Grid } from "@chakra-ui/react";

import { useWindowSize } from "usehooks-ts";

import { Header } from "../Components/Header";
import { Search } from "../Components/Search";
import { Filters } from "../Components/Filters";
import { Cards } from "../Components/Cards";

import { api } from "../services/api";

import { Info, Result } from "../utils/types";

export default function Home() {
  const { width } = useWindowSize();

  const [page, setPage] = useState(1);
  const [results, setResults] = useState<Result[]>([]);
  const [info, setInfo] = useState<Info>({} as Info);

  console.log("🚀 ~ info", info);
  console.log("🚀 ~ page", page);

  useEffect(() => {
    (async () => {
      await api.get(`/character/?page=${page}`).then((res) => {
        setResults(res.data.results);
        setInfo(res.data.info);
      });
    })();
  }, [page]);

  return (
    <>
      <Head>
        <title>Rick & Morty Wiki | Home</title>
      </Head>
      <Header />

      <Container maxW="1240px" centerContent px="1rem">
        <Search />

        {width < 768 && <Filters />}
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={4}
          overflow="hidden"
          py={6}
          width="full"
        >
          {width >= 768 && <Filters />}
          <Cards results={results} onPageChange={setPage} page={page} />
        </Grid>
      </Container>
    </>
  );
}
