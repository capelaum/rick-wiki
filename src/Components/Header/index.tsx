import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const background = useColorModeValue("white", "gray.700");

  return (
    <Flex
      as="header"
      bg={background}
      borderBottom="1px"
      borderColor="cyan.600"
      py="1rem"
      justifyContent="center"
      px="1.25rem"
    >
      <Flex
        maxWidth="1200px"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={["column", "row"]}
      >
        <Heading
          as="h1"
          display="flex"
          size="lg"
          cursor="pointer"
          color={useColorModeValue("gray.700", "gray.200")}
          transition="all 0.3s"
          _hover={{
            color: "cyan.400",
          }}
        >
          Rick & Morty
          <Text as="span" pl={2} color="cyan.400">
            Wiki
          </Text>
        </Heading>

        <Stack direction={["column-reverse", "row"]} spacing={2}>
          <Button colorScheme="cyan" variant="ghost" focusBorderColor="none">
            Characters
          </Button>
          <Button colorScheme="cyan" variant="ghost">
            Episodes
          </Button>
          <Button colorScheme="cyan" variant="ghost">
            Locations
          </Button>

          <Tooltip
            hasArrow
            label={colorMode === "light" ? "Dark" : "Light"}
            placement="bottom-end"
          >
            <Button
              colorScheme="cyan"
              variant="ghost"
              onClick={toggleColorMode}
              aria-label="Light / Dark mode"
              defaultChecked
              size="md"
            >
              {colorMode === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
            </Button>
          </Tooltip>
        </Stack>
      </Flex>
    </Flex>
  );
}
