import { Select, Stack } from "@chakra-ui/react";

import { CharSelect } from "./CharSelect";

interface CharFiltersProps {
  handleFilters: (value: string, type: string) => void;
}

export function CharFilters({ handleFilters }: CharFiltersProps) {
  return (
    <Stack direction={["column", "row"]} spacing={4} w="full">
      <CharSelect type="Status" handleFilters={handleFilters} />
      <CharSelect type="Species" handleFilters={handleFilters} />
      <CharSelect type="Gender" handleFilters={handleFilters} />
    </Stack>
  );
}
