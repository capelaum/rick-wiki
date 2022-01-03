import { useCallback, useEffect, useState } from "react";
import Head from "next/head";

import { Container, Flex } from "@chakra-ui/react";

import { Header } from "../Components/Header";
import { Filters } from "../Components/Filters";
import { Cards } from "../Components/Cards";

import { api } from "../services/api";

import { Info, Result } from "../utils/types";

import { useDebounce } from "usehooks-ts";
import { PaginationComponent } from "../Components/Pagination";

export default function Home() {
  const [results, setResults] = useState<Result[]>([]);
  const [info, setInfo] = useState<Info>({} as Info);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearch = useDebounce<string>(search, 500);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [results]);

  useEffect(() => {
    (async () => {
      await api
        .get(
          `/character/?page=${page}&name=${debouncedSearch}&status=${status}&gender=${gender}&species=${species}`,
        )
        .then((res) => {
          setResults(res.data.results);
          setInfo(res.data.info);
        })
        .catch(() => {
          setResults([]);
          setInfo({} as Info);
        });
    })();
  }, [page, debouncedSearch, status, gender, species]);

  const handleSearch = useCallback((value: string) => {
    setSearch(value);
    setPage(1);
  }, []);

  const handleFilters = useCallback((value: string, type: string) => {
    if (type === "Status") {
      setStatus(value);
    }
    if (type === "Species") {
      setSpecies(value);
    }
    if (type === "Gender") {
      setGender(value);
    }
    setPage(1);
  }, []);

  return (
    <>
      <Head>
        <title>Rick & Morty Wiki | Characters</title>
      </Head>
      <Header />

      <Container maxW="1240px" centerContent px="1.25rem">
        <Filters
          handleSearch={handleSearch}
          search={search}
          handleFilters={handleFilters}
        />

        <Flex direction="column" w="full" py={8}>
          <PaginationComponent info={info} page={page} setPage={setPage} />

          <Cards results={results} isLoading={isLoading} />
        </Flex>
      </Container>
    </>
  );
}
