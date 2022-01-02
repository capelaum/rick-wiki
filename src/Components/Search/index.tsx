import { Box, Heading } from "@chakra-ui/react";

interface SearchProps {}

export function Search() {
  return (
    <Box bg="green" mt={8}>
      <Heading as="h2">Search</Heading>
    </Box>
  );
}
