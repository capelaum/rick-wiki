import { useCallback, useEffect, useState } from "react";
import Head from "next/head";

import { Container, Flex } from "@chakra-ui/react";

import { Header } from "../Components/Header";
import { Filters } from "../Components/Filters";
import { Cards } from "../Components/Cards";

import { api } from "../services/api";

import { Info, Character } from "../utils/types";

import { useDebounce } from "usehooks-ts";
import { PaginationComponent } from "../Components/Pagination";
import { Footer } from "../Components/Footer";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [info, setInfo] = useState<Info>({} as Info);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearch = useDebounce<string>(search, 500);

  useEffect(() => {
    (async () => {
      await api
        .get(
          `/character/?page=${page}&name=${debouncedSearch}&status=${status}&gender=${gender}&species=${species}`,
        )
        .then((res) => {
          setCharacters(res.data.results);
          setInfo(res.data.info);
        })
        .catch(() => {
          setCharacters([]);
          setInfo({} as Info);
        });
    })();
  }, [page, debouncedSearch, status, gender, species]);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [characters]);

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

      <Container maxW="1240px" centerContent px="1.25rem" minH="100vh">
        <Filters
          handleSearch={handleSearch}
          search={search}
          handleFilters={handleFilters}
        />

        <Flex direction="column" w="full" py={8}>
          <PaginationComponent info={info} page={page} setPage={setPage} />

          <Cards characters={characters} isLoading={isLoading} />
        </Flex>
      </Container>

      <Footer />
    </>
  );
}
