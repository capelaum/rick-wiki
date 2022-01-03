import { IconButton, Stack, Tooltip, useColorMode } from "@chakra-ui/react";

import { FaMoon, FaSun } from "react-icons/fa";

import { HeaderButton } from "./HeaderButton";

interface HeaderButtonsProps {
  isRowDirection?: boolean;
}

export function HeaderButtons({ isRowDirection }: HeaderButtonsProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack direction={isRowDirection ? "row" : "column"} w="full">
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

      <Tooltip
        hasArrow
        label={colorMode === "light" ? "Dark" : "Light"}
        placement="bottom"
      >
        <IconButton
          colorScheme="cyan"
          variant={isRowDirection ? "ghost" : "outline"}
          size={isRowDirection ? "md" : "sm"}
          onClick={toggleColorMode}
          aria-label="Light / Dark mode"
          _focus={{
            outline: "none",
          }}
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        />
      </Tooltip>
    </Stack>
  );
}
