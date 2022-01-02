import { Box, GridItem, Heading } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface FiltersProps {}

export function Filters() {
  return (
    <GridItem background="gray.700" rowSpan={1} rounded="lg" p={2}>
      <Heading as="h2" width="100%">
        Filters
      </Heading>
    </GridItem>
  );
}
