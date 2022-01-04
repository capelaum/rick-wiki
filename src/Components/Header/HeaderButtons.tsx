import { Stack, useColorMode } from "@chakra-ui/react";

import { ColorModeButton } from "../ColorModeButton";

import { HeaderButton } from "./HeaderButton";

interface HeaderButtonsProps {
  isRowDirection?: boolean;
}

export function HeaderButtons({ isRowDirection }: HeaderButtonsProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack
      direction={isRowDirection ? "row" : "column"}
      w="full"
      pt={[0, 4, 0]}
    >
      <HeaderButton
        href="/"
        text="Characters"
        isRowDirection={isRowDirection}
      />
      <HeaderButton
        href="/episodes"
        text="Episodes"
        isRowDirection={isRowDirection}
      />
      <HeaderButton
        href="/locations"
        text="Locations"
        isRowDirection={isRowDirection}
      />

      <ColorModeButton isRowDirection={isRowDirection} />
    </Stack>
  );
}
