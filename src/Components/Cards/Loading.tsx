import { Flex, Spinner } from "@chakra-ui/react";

export function Loading() {
  return (
    <Flex w="full" mt={32} justifyContent="center" alignItems="center">
      <Spinner
        color="cyan.600"
        size="xl"
        w={20}
        h={20}
        thickness="8px"
        speed="0.5s"
      />
    </Flex>
  );
}
