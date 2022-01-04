import { Box, Flex, Heading, Icon, SimpleGrid } from "@chakra-ui/react";

import { Info, Result } from "../../utils/types";
import { PaginationComponent } from "../Pagination";

import { Card } from "./Card";
import { Loading } from "./Loading";
import { NoResults } from "./NoResults";

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

  function renderResults() {
    return results.length ? renderCards() : <NoResults />;
  }

  return <Box w="full">{isLoading ? <Loading /> : renderResults()}</Box>;
}
