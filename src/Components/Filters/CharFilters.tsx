import { Select, Stack } from "@chakra-ui/react";

import { MdArrowDropDown } from "react-icons/md";

interface FiltersProps {}

export function CharFilters() {
  return (
    <Stack direction={["column", "row"]} spacing={4} w="full">
      <Select
        placeholder="Status"
        size="md"
        variant="outline"
        icon={<MdArrowDropDown />}
        iconColor="cyan.600"
        borderColor="cyan.600"
        colorScheme="cyan"
        _hover={{
          cursor: "pointer",
          outline: "none",
        }}
      >
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </Select>
      <Select
        placeholder="Species"
        size="md"
        variant="outline"
        icon={<MdArrowDropDown />}
        iconColor="cyan.600"
        borderColor="cyan.600"
        _hover={{
          cursor: "pointer",
          outline: "none",
        }}
      >
        <option value="human">Human</option>
        <option value="alien">Alien</option>
        <option value="humanoid">Humanoid</option>
        <option value="poopybutthole">Poopybutthole</option>
        <option value="mythological">Mythological</option>
        <option value="unknown">Unknown</option>
        <option value="animal">Animal</option>
        <option value="disease">Disease</option>
        <option value="robot">Robot</option>
        <option value="cronenberg">Cronenberg</option>
        <option value="planet">Planet</option>
      </Select>
      <Select
        placeholder="Gender"
        size="md"
        variant="outline"
        icon={<MdArrowDropDown />}
        iconColor="cyan.600"
        borderColor="cyan.600"
        _hover={{
          cursor: "pointer",
          outline: "none",
        }}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </Select>
    </Stack>
  );
}
