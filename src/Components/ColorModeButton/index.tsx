import {
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaMoon, FaSun } from "react-icons/fa";

interface ColorModeButtonProps {
  isRowDirection?: boolean;
}

export function ColorModeButton({ isRowDirection }: ColorModeButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const cyanColor = useColorModeValue("cyan.600", "cyan");

  return (
    <Tooltip
      hasArrow
      label={colorMode === "light" ? "Dark" : "Light"}
      placement="bottom"
    >
      <IconButton
        color={cyanColor}
        variant={isRowDirection ? "ghost" : "outline"}
        size="md"
        onClick={toggleColorMode}
        aria-label="Light / Dark mode"
        _focus={{
          outline: "none",
        }}
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
      />
    </Tooltip>
  );
}
