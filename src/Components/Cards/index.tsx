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
    <GridItem colSpan={4}>
      <SimpleGrid minChildWidth="150px" spacing="20px">
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </GridItem>
  );
}
