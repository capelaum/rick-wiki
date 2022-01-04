import { ChangeEvent } from "react";

import {
  Select,
  FormControl,
  FormLabel,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";

export function LocationSelect() {
  const cyanColor = useColorModeValue("cyan.600", "cyan");

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);

    // handleSelectEpisode(+e.target.value);
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
        // onChange={(e) => handleChange(e)}
      >
        {/* {allEpisodes.map((episode) => (
          <option key={episode.id} value={episode.id}>
            Episode {episode.id} - {episode.episode}
          </option>
        ))} */}
      </Select>
    </FormControl>
  );
}
