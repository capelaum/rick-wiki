import { ChangeEvent } from "react";

import {
  Select,
  FormControl,
  FormLabel,
  VisuallyHidden,
} from "@chakra-ui/react";

export function EpisodeSelect() {
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
        iconColor="cyan.600"
        borderColor="cyan.600"
        colorScheme="cyan"
        _hover={{
          cursor: "pointer",
          outline: "none",
        }}
        // onChange={(e) => handleChange(e)}
      >
        <option value="value">Value</option>
      </Select>
    </FormControl>
  );
}
