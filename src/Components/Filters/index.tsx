import { Stack } from "@chakra-ui/react";

import { CharFilters } from "./CharFilters";
import { Search } from "./Search";

interface FiltersProps {
  handleSearch: (value: string) => void;
  handleFilters: (value: string, type: string) => void;
  search: string;
}

export function Filters({ handleSearch, handleFilters, search }: FiltersProps) {
  return (
    <Stack
      direction={["column", "column", "column", "row"]}
      spacing={4}
      w="full"
      py={4}
    >
      <Search handleSearch={handleSearch} search={search} />
      <CharFilters handleFilters={handleFilters} />
    </Stack>
  );
}
