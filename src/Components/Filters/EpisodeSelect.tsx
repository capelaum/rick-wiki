import { ChangeEvent } from "react";

import {
  Select,
  FormControl,
  FormLabel,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";

interface EpisodeSelectProps {
  handleSelectEpisode: (id: number) => void;
}

export function EpisodeSelect({ handleSelectEpisode }: EpisodeSelectProps) {
  const cyanColor = useColorModeValue("cyan.600", "cyan");

  return (
    <FormControl maxW="400px">
      <VisuallyHidden>
        <FormLabel htmlFor="episodes">Episodes</FormLabel>
      </VisuallyHidden>
      <Select
        id="episodes"
        aria-label="Select episode"
        name="episodes"
        title="episodes"
        placeholder="Episode id: Name"
        size="md"
        variant="outline"
        // icon={<MdArrowDropDown />}
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
        <option value="value">Value</option>
      </Select>
    </FormControl>
  );
}
