import { useCallback, useEffect, useState } from "react";
import Head from "next/head";

import { Container, Grid, Stack } from "@chakra-ui/react";

import { Header } from "../Components/Header";
import { Filters } from "../Components/Filters";
import { Cards } from "../Components/Cards";

import { api } from "../services/api";

import { Data, Info, Result } from "../utils/types";

import { useDebounce } from "usehooks-ts";

export default function Home() {
  const [results, setResults] = useState<Result[]>([]);
  const [info, setInfo] = useState<Info>({} as Info);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce<string>(search, 500);

  useEffect(() => {
    (async () => {
      await api
        .get(`/character/?page=${page}&name=${debouncedSearch}`)
        .then((res) => {
          setResults(res.data.results);
          setInfo(res.data.info);
        })
        .catch(() => {
          setResults([]);
          setInfo({} as Info);
        });
    })();
  }, [page, debouncedSearch]);

  const onSearch = useCallback((value: string) => {
    setSearch(value);
  }, []);

  return (
    <>
      <Head>
        <title>Rick & Morty Wiki | Home</title>
      </Head>
      <Header />

      <Container maxW="1240px" centerContent px="1.25rem">
        <Filters onSearch={onSearch} setPage={setPage} search={search} />
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={4}
          overflow="hidden"
          py={6}
          width="full"
          alignItems="center"
        >
          <Cards info={info} results={results} setPage={setPage} page={page} />
        </Grid>
      </Container>
    </>
  );
}
