import {
  Grid,
  GridItem,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import { Card } from "../Card";

export function Cards() {
  const flexBackground = useColorModeValue("#F9FAFB", "gray.600");

  return (
    <GridItem colSpan={3}>
      <SimpleGrid minChildWidth="250px" spacing={4}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </GridItem>
  );
}
