import { Flex, Heading, Icon, useColorModeValue } from "@chakra-ui/react";

import { MdErrorOutline } from "react-icons/md";

export function NoResults() {
  const cyanColor = useColorModeValue("cyan.600", "cyan");

  return (
    <Flex justifyContent="center" alignItems="center" w="full">
      <Heading as="h1" size="lg">
        No Characters found{" "}
        <Icon as={MdErrorOutline} fontSize="2xl" color={cyanColor} />
      </Heading>
    </Flex>
  );
}
