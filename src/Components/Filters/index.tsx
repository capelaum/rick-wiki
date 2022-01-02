import { Box, GridItem, Heading, useColorModeValue } from "@chakra-ui/react";

interface FiltersProps {}

export function Filters() {
  const boxBackground = useColorModeValue("white", "gray.700");

  return (
    <GridItem
      background={boxBackground}
      rowSpan={1}
      rounded="lg"
      p={2}
      border="1px"
      borderColor="cyan.300"
    >
      <Heading as="h2" width="100%">
        Filters
      </Heading>
    </GridItem>
  );
}
