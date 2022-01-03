import {
  Box,
  Flex,
  GridItem,
  Heading,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";

import { Result } from "../../utils/types";
import { Pagination } from "../Pagination";

import { BsEmojiDizzy } from "react-icons/bs";

import { Card } from "./Card";

interface CardsProps {
  results: Result[];
  nextPage: () => void;
  prevPage: () => void;
  page: number;
}

export function Cards({ results, nextPage, prevPage, page }: CardsProps) {
  return (
    <GridItem colSpan={4}>
      <Pagination nextPage={nextPage} prevPage={prevPage} page={page} />

      {results.length > 0 ? (
        <SimpleGrid minChildWidth="250px" spacing={4}>
          {results.map((result) => (
            <Card key={result.id} result={result} />
          ))}
        </SimpleGrid>
      ) : (
        <Flex justifyContent="center" w="full">
          <Heading as="h1" size="lg">
            No Characters found{" "}
            <Icon as={BsEmojiDizzy} size="md" color="cyan.600" />
          </Heading>
        </Flex>
      )}
    </GridItem>
  );
}
