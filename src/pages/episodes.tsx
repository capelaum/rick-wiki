import { useCallback, useEffect, useState } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";

import {
  chakra,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { api } from "../services/api";

import { Episode, Info, Result } from "../utils/types";

import { Cards } from "../Components/Cards";
import { Header } from "../Components/Header";
import { EpisodesHeader } from "../Components/Episodes/EpisodesHeader";
import { EpisodeSelect } from "../Components/Filters/EpisodeSelect";

interface EpisodesProps {
  episodes: Episode[];
  info: Info;
}

export default function Episodes({ episodes, info }: EpisodesProps) {
  console.log("🚀 ~ info", info);
  console.log("🚀 ~ episodes", episodes);
  console.log("🚀 ~ episodes.length", episodes.length);
  const [episode, setEpisode] = useState<Episode>({} as Episode);
  const [results, setResults] = useState<Result[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(1);

  const fetchEpisode = useCallback(async () => {
    const episodeData: Episode = await fetch(`/api/episodes/${id}`)
      .then((res) => res.json())
      .catch(() => {});

    console.log("🚀 ~ episodeData", episodeData);
    setEpisode(episodeData);
  }, [id]);

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

  const handleSelectEpisode = useCallback((id: number) => {
    setId(id);
  }, []);

  return (
    <>
      <Head>
        <title>Rick & Morty Wiki | Episodes</title>
      </Head>
      <Header />

      <Container maxW="1240px" centerContent px="1.25rem">
        <EpisodesHeader episode={episode} />

        <EpisodeSelect handleSelectEpisode={handleSelectEpisode} />

        <Flex direction="column" w="full" py={8}>
          <Cards results={results} isLoading={isLoading} />
        </Flex>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await api.get("/episode");
  const { info } = data;

  const allEpisodesIds = [...Array(info.count).keys()].map((i) => i + 1);

  const { data: episodes } = await api.get(`/episode/${allEpisodesIds}`);

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { episodes, info },
    revalidate: 15 * 60,
  };
};
