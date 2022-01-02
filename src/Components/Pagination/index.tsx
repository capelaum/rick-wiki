import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Stack,
} from "@chakra-ui/react";

interface PaginationProps {
  setPageNumber: (pageNumber: number) => void;
  page: number;
}

export function Pagination({ setPageNumber, page }) {
  function goToPreviousPage() {
    setPageNumber((pageNumber: number) =>
      pageNumber >= 1 ? pageNumber - 1 : pageNumber,
    );
  }

  function goToNextPage() {
    setPageNumber((pageNumber: number) => pageNumber + 1);
  }

  return (
    <Flex justifyContent="center" w="full" mb={8}>
      <ButtonGroup spacing={4} colorScheme="teal" variant="outline" size="sm">
        <Button onClick={goToPreviousPage} isDisabled={page <= 1}>
          Prev
        </Button>
        <Button onClick={goToNextPage}>Next</Button>
      </ButtonGroup>
    </Flex>
  );
}
