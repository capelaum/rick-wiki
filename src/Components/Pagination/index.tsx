import { Button, ButtonGroup, Flex } from "@chakra-ui/react";

interface PaginationProps {
  nextPage: () => void;
  prevPage: () => void;
  page: number;
}

export function Pagination({ nextPage, prevPage, page }: PaginationProps) {
  return (
    <Flex justifyContent="center" w="full" mb={8}>
      <ButtonGroup spacing={4} colorScheme="teal" variant="outline" size="sm">
        <Button onClick={prevPage} isDisabled={page <= 1}>
          Prev
        </Button>
        <Button onClick={nextPage}>Next</Button>
      </ButtonGroup>
    </Flex>
  );
}
