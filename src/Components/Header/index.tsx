import {
  Box,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { AiOutlineMenu } from "react-icons/ai";

import { HeaderButtons } from "./HeaderButtons";
import { Logo } from "./Logo";

export function Header() {
  const background = useColorModeValue("white", "gray.700");
  const cyanColor = useColorModeValue("cyan.600", "cyan");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="header"
      bg={background}
      borderBottom="1px"
      borderColor={cyanColor}
      py="1rem"
      justifyContent="center"
      alignItems="center"
      px="1.25rem"
    >
      <Flex
        maxWidth="1200px"
        w="100%"
        justifyContent={["center", "space-between"]}
        alignItems={["flex-start", "center"]}
        flexDirection={["column", "column", "row"]}
      >
        <Logo />
        <HStack spacing={2} display={{ base: "none", sm: "flex" }}>
          <HeaderButtons isRowDirection />
        </HStack>

        <Box display={{ base: "inline-flex", sm: "none" }} w="full">
          <IconButton
            display={isOpen ? "none" : "flex"}
            aria-label="Open menu"
            fontSize="24px"
            color={cyanColor}
            variant="ghost"
            icon={<AiOutlineMenu />}
            onClick={onOpen}
            pos="absolute"
            top={3.5}
            right={3.5}
          />

          <CloseButton
            color={cyanColor}
            aria-label="Close menu"
            onClick={onClose}
            display={isOpen ? "flex" : "none"}
            pos="absolute"
            top={3.5}
            right={3.5}
            size="lg"
          />

          <VStack
            display={isOpen ? "flex" : "none"}
            flexDirection="column"
            w="full"
            pt={4}
            shadow="sm"
          >
            <HeaderButtons />
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
}
