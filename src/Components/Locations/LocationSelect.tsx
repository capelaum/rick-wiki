import { ChangeEvent } from "react";

import {
  Select,
  FormControl,
  FormLabel,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";

import { Location } from "../../utils/types";

interface EpisodeSelectProps {
  handleSelectLocation: (id: number) => void;
  allLocations: Location[];
}

export function LocationSelect({
  handleSelectLocation,
  allLocations,
}: EpisodeSelectProps) {
  const cyanColor = useColorModeValue("cyan.600", "cyan");

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);

    handleSelectLocation(+e.target.value);
  }

  return (
    <FormControl maxW="400px">
      <VisuallyHidden>
        <FormLabel htmlFor="locations">Locations</FormLabel>
      </VisuallyHidden>
      <Select
        id="locations"
        name="locations"
        aria-label="Select Location"
        title="Select episode"
        // placeholder="Select episode"
        size="md"
        variant="outline"
        // icon={<MdArrowDropDown />}
        color={cyanColor}
        iconColor={cyanColor}
        borderColor={cyanColor}
        colorScheme="cyan"
        _hover={{
          cursor: "pointer",
          outline: "none",
        }}
        _focus={{
          outline: "none",
        }}
        onChange={(e) => handleChange(e)}
      >
        {allLocations.map((location) => (
          <option key={location.id} value={location.id}>
            Location {location.id} - {location.name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
