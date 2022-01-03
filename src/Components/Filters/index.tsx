import { Stack } from "@chakra-ui/react";

import { CharFilters } from "./CharFilters";
import { Search } from "./Search";

interface FiltersProps {
  onSearch: (value: string) => void;
  setPage: (page: number) => void;
  search: string;
}

export function Filters({ onSearch, setPage, search }: FiltersProps) {
  return (
    <Stack
      direction={["column", "column", "column", "row"]}
      spacing={4}
      w="full"
      py={4}
    >
      <Search onSearch={onSearch} search={search} setPage={setPage} />
      <CharFilters />
    </Stack>
  );
}
