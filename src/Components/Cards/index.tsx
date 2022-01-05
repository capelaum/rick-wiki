import { Box, SimpleGrid } from "@chakra-ui/react";

import { Character } from "../../utils/types";

import { Card } from "./Card";
import { Loading } from "./Loading";
import { NoResults } from "./NoResults";

interface CardsProps {
  characters: Character[];
  isLoading: boolean;
}

export function Cards({ characters, isLoading }: CardsProps) {
  function renderCards() {
    return (
      <SimpleGrid
        minChildWidth="250px"
        spacingX="1.25rem"
        spacingY="2rem"
        justifyItems="center"
      >
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </SimpleGrid>
    );
  }

  function renderCharacters() {
    return characters.length ? renderCards() : <NoResults />;
  }

  return <Box w="full">{isLoading ? <Loading /> : renderCharacters()}</Box>;
}
