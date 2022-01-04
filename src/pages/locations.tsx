import {
  chakra,
  Flex,
  Heading,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import Head from "next/head";

import { Header } from "../Components/Header";
import { LocationsHeader } from "../Components/Locations/LocationsHeader";
import { LocationSelect } from "../Components/Locations/LocationSelect";

export default function Locations() {
  const textColor = useColorModeValue("gray.700", "gray.200");
  const spanColor = useColorModeValue("cyan.600", "cyan");

  return (
    <>
      <Head>
        <title>Rick & Morty Wiki | Episodes</title>
      </Head>
      <Header />

      <Container maxW="1240px" centerContent px="1.25rem">
        <LocationsHeader />

        <LocationSelect />
      </Container>
    </>
  );
}
