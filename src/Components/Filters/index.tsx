import {
  Box,
  GridItem,
  Heading,
  Select,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";

interface FiltersProps {}

export function Filters() {
  const boxBackground = useColorModeValue("white", "gray.700");

  return (
    <GridItem
      background={boxBackground}
      colSpan={1}
      rounded="lg"
      p={4}
      h={60}
      border="1px"
      borderColor="cyan.600"
    >
      <Stack spacing={3}>
        <Heading
          as="h2"
          width="100%"
          size="lg"
          color={useColorModeValue("gray.700", "gray.200")}
        >
          Filters
        </Heading>
        <Select
          placeholder="Status"
          size="md"
          variant="outline"
          icon={<MdArrowDropDown />}
          borderColor="cyan.600"
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
          borderColor="cyan.600"
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
          borderColor="cyan.600"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </Select>
      </Stack>
    </GridItem>
  );
}
