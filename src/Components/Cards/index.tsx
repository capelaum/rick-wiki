import {
  Box,
  Grid,
  GridItem,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { useWindowSize } from "usehooks-ts";

import { Result } from "../../utils/types";
import { Pagination } from "../Pagination";

import { Card } from "./Card";

interface CardsProps {
  results: Result[];
  onPageChange: (pageNumber: number) => void;
  page: number;
}

export function Cards({ results, onPageChange, page }: CardsProps) {
  const { width } = useWindowSize();

  return (
    <GridItem colSpan={4}>
      <Pagination setPageNumber={onPageChange} page={page} />

      {results ? (
        <SimpleGrid minChildWidth="250px" spacing={4}>
          {results.map((result) => (
            <Card key={result.id} result={result} />
          ))}
        </SimpleGrid>
      ) : (
        <Box>
          <h1>No Characters found... 😕</h1>
        </Box>
      )}
    </GridItem>
  );
}
