import {
  Box,
  Flex,
  GridItem,
  Heading,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";

import { Info, Result } from "../../utils/types";
import { PaginationComponent } from "../Pagination";

import { BsEmojiDizzy } from "react-icons/bs";

import { Card } from "./Card";

interface CardsProps {
  results: Result[];
  setPage: (page: number) => void;
  page: number;
  info: Info;
}

export function Cards({ info, results, setPage, page }: CardsProps) {
  return (
    <GridItem colSpan={4}>
      <PaginationComponent info={info} page={page} setPage={setPage} />

      {results.length > 0 ? (
        <SimpleGrid minChildWidth="250px" spacing={4} justifyItems="center">
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
