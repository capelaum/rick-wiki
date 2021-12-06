import { Box, Heading } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface FiltersProps {}

export function Filters() {
  return (
    <Box background="gray.700" width="100%">
      <Heading as="h2" width="100%">
        Filters
      </Heading>
    </Box>
  );
}
