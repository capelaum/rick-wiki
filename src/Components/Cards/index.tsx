import { Box, Flex, Heading, Icon, SimpleGrid } from "@chakra-ui/react";

import { Info, Result } from "../../utils/types";
import { PaginationComponent } from "../Pagination";

import { BsEmojiDizzy } from "react-icons/bs";

import { Card } from "./Card";
import { Loading } from "./Loading";

interface CardsProps {
  results: Result[];
  isLoading: boolean;
}

export function Cards({ results, isLoading }: CardsProps) {
  function renderCards() {
    return (
      <SimpleGrid
        minChildWidth="250px"
        spacingX="1.25rem"
        spacingY="2rem"
        justifyItems="center"
      >
        {results.map((result) => (
          <Card key={result.id} result={result} />
        ))}
      </SimpleGrid>
    );
  }

  function renderNoResults() {
    return (
      <Flex justifyContent="center" w="full">
        <Heading as="h1" size="lg">
          No Characters found{" "}
          <Icon as={BsEmojiDizzy} size="md" color="cyan.600" />
        </Heading>
      </Flex>
    );
  }

  function renderResults() {
    return results.length ? renderCards() : renderNoResults();
  }

  return <Box w="full">{isLoading ? <Loading /> : renderResults()}</Box>;
}
