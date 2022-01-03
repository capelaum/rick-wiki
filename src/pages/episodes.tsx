import { useCallback, useEffect, useState } from "react";
import Head from "next/head";

import {
  chakra,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { Cards } from "../Components/Cards";
import { EpisodeSelect } from "../Components/Filters/EpisodeSelect";
import { Header } from "../Components/Header";

import { api } from "../services/api";

import { Episode, Result } from "../utils/types";

export default function Episodes() {
  const textColor = useColorModeValue("gray.700", "gray.200");
  const spanColor = useColorModeValue("cyan.600", "cyan");

  const [episode, setEpisode] = useState<Episode>({} as Episode);
  const [results, setResults] = useState<Result[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(1);

  const query = `/episode/${id}`;

  const fetchEpisode = useCallback(async () => {
    const episodeData: Episode = await api
      .get(query)
      .then((res) => res.data)
      .catch(() => {});

    console.log("🚀 ~ episodeData", episodeData);
    setEpisode(episodeData);
  }, [query]);

  const fetchCharacters = useCallback(async () => {
    const resultsData = await Promise.all(
      episode.characters.map(async (character) => {
        return await fetch(character).then((res) => res.json());
      }),
    );

    console.log("🚀 ~ resultsData", resultsData);
    setResults(resultsData);
  }, [episode?.characters]);

  useEffect(() => {
    fetchEpisode();
  }, [fetchEpisode]);

  useEffect(() => {
    if (episode.characters) {
      fetchCharacters();
    }
  }, [fetchCharacters, episode]);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [episode]);

  return (
    <>
      <Head>
        <title>Rick & Morty Wiki | Home</title>
      </Head>
      <Header />

      <Container maxW="1240px" centerContent px="1.25rem">
        <Flex direction="column" w="full" py={8} alignItems="center">
          <Heading as="h1" size="xl" color={textColor} pb={4}>
            Episode: <chakra.span color={spanColor}>{episode.name}</chakra.span>
          </Heading>
          <Heading as="h2" fontSize={["md", "lg"]} color={textColor}>
            Air Date:{" "}
            <chakra.span color={spanColor}>{episode.air_date}</chakra.span>
          </Heading>
        </Flex>

        <EpisodeSelect />

        <Flex direction="column" w="full" py={8}>
          <Cards results={results} isLoading={isLoading} />
        </Flex>
      </Container>
    </>
  );
}
