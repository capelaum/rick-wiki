import {
  Grid,
  GridItem,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import { Result } from "../../utils/types";

import { Card } from "./Card";

interface CardsProps {
  results: Result[];
}

export function Cards({ results }: CardsProps) {
  return (
    <GridItem colSpan={3}>
      <SimpleGrid minChildWidth="250px" spacing={4}>
        {results.map((result) => (
          <Card key={result.id} result={result} />
        ))}
      </SimpleGrid>
    </GridItem>
  );
}
