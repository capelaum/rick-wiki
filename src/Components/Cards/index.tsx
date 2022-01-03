import { Box, Flex, Heading, Icon, SimpleGrid } from "@chakra-ui/react";

import { Info, Result } from "../../utils/types";
import { PaginationComponent } from "../Pagination";

import { BsEmojiDizzy } from "react-icons/bs";

import { Card } from "./Card";
import { Loading } from "./Loading";

interface CardsProps {
  results: Result[];
  setPage: (page: number) => void;
  page: number;
  info: Info;
  isLoading: boolean;
}

export function Cards({ info, results, setPage, page, isLoading }: CardsProps) {
  return (
    <Box w="full">
      <PaginationComponent info={info} page={page} setPage={setPage} />

      {isLoading ? (
        <Loading />
      ) : results.length > 0 ? (
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
      ) : (
        <Flex justifyContent="center" w="full">
          <Heading as="h1" size="lg">
            No Characters found{" "}
            <Icon as={BsEmojiDizzy} size="md" color="cyan.600" />
          </Heading>
        </Flex>
      )}
    </Box>
  );
}
