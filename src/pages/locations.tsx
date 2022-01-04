import { useCallback, useEffect, useState } from "react";

import Head from "next/head";
import { GetStaticProps } from "next";

import { Container, Flex } from "@chakra-ui/react";

import { api } from "../services/api";

import { Info, Result, Location } from "../utils/types";

import { Header } from "../Components/Header";
import { LocationsHeader } from "../Components/Locations/LocationsHeader";
import { LocationSelect } from "../Components/Locations/LocationSelect";
import { Cards } from "../Components/Cards";

interface LocationsProps {
  locations: Location[];
  info: Info;
}

export default function Locations({ locations, info }: LocationsProps) {
  const [allLocations, _] = useState<Location[]>(locations);
  const [location, setLocation] = useState<Location>(locations[0]);
  const [residents, setResidents] = useState<Result[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(1);

  const getLocation = useCallback(
    (id: number): Location => {
      return allLocations.find((location) => location.id === id);
    },
    [allLocations],
  );

  const fetchResidents = useCallback(async () => {
    try {
      const results = await Promise.all(
        location.residents.map(async (resident) => {
          return await fetch(resident).then((res) => res.json());
        }),
      );

      setResidents(results);
    } catch (err) {
      console.error(err.message);
    }
  }, [location?.residents]);

  useEffect(() => {
    setLocation(getLocation(id));
  }, [id, getLocation]);

  useEffect(() => {
    if (location.residents) {
      fetchResidents();
    }
  }, [fetchResidents, location]);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [location]);

  const handleSelectLocation = useCallback((id: number) => {
    setId(id);
  }, []);

  return (
    <>
      <Head>
        <title>Rick & Morty Wiki | Locations</title>
      </Head>
      <Header />

      <Container maxW="1240px" centerContent px="1.25rem">
        <LocationsHeader location={location} />

        <LocationSelect
          handleSelectLocation={handleSelectLocation}
          allLocations={allLocations}
        />

        <Flex direction="column" w="full" py={8}>
          <Cards results={residents} isLoading={isLoading} />
        </Flex>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await api.get("/location");
  const { info } = data;

  const locationsIds = [...Array(info.count).keys()].map((i) => i + 1);

  const { data: locations } = await api.get(`/location/${locationsIds}`);

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { locations, info },
    revalidate: 15 * 60,
  };
};
