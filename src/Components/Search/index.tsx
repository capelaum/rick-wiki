import { Box, Heading } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface SearchProps {}

export function Search() {
  return (
    <Box bg="green" my={10}>
      <Heading as="h2">Search</Heading>
    </Box>
  );
}
