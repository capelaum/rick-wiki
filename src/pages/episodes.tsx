import { useCallback, useEffect, useState } from "react";

import Head from "next/head";
import { GetStaticProps } from "next";

import { Container, Flex } from "@chakra-ui/react";

import { api } from "../services/api";

import { Episode, Info, Result } from "../utils/types";

import { Cards } from "../Components/Cards";
import { Header } from "../Components/Header";
import { EpisodesHeader } from "../Components/Episodes/EpisodesHeader";
import { EpisodeSelect } from "../Components/Episodes/EpisodeSelect";

interface EpisodesProps {
  episodes: Episode[];
  info: Info;
}

export default function Episodes({ episodes, info }: EpisodesProps) {
  const [allEpisodes, _] = useState<Episode[]>(episodes);
  const [episode, setEpisode] = useState<Episode>(episodes[0]);
  const [characters, setCharacters] = useState<Result[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(1);

  const getEpisode = useCallback(
    (id: number): Episode => {
      return allEpisodes.find((episode) => episode.id === id);
    },
    [allEpisodes],
  );

  const fetchCharacters = useCallback(async () => {
    try {
      const results = await Promise.all(
        episode.characters.map(async (character) => {
          return await fetch(character).then((res) => res.json());
        }),
      );

      setCharacters(results);
    } catch (err) {
      console.error(err.message);
    }
  }, [episode?.characters]);

  useEffect(() => {
    setEpisode(getEpisode(id));
  }, [id, getEpisode]);

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

        <EpisodeSelect
          handleSelectEpisode={handleSelectEpisode}
          allEpisodes={allEpisodes}
        />

        <Flex direction="column" w="full" py={8}>
          <Cards results={characters} isLoading={isLoading} />
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
