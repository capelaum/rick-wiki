import { Flex, Spinner, useColorModeValue } from "@chakra-ui/react";

export function Loading() {
  const cyanColor = useColorModeValue("cyan.600", "cyan");

  return (
    <Flex w="full" mt={32} justifyContent="center" alignItems="center">
      <Spinner
        color={cyanColor}
        size="xl"
        w={20}
        h={20}
        thickness="8px"
        speed="0.5s"
      />
    </Flex>
  );
}
