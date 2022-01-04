import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button, useColorModeValue } from "@chakra-ui/react";

interface HeaderButtonProps {
  isRowDirection: boolean;
  text: string;
  href: string;
}

export function HeaderButton({
  isRowDirection,
  text,
  href,
}: HeaderButtonProps) {
  const cyanColor = useColorModeValue("cyan.600", "cyan");
  const grayColor = useColorModeValue("white", "gray.700");

  const [path, setPath] = useState("Characters");
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/characters") setPath("Characters");
    if (router.pathname === "/episodes") setPath("Episodes");
    if (router.pathname === "/locations") setPath("Locations");
  }, [router.pathname]);

  return (
    <Link href={href} passHref>
      <Button
        colorScheme="cyan"
        color={cyanColor}
        borderColor={cyanColor}
        variant={isRowDirection ? "ghost" : "outline"}
        size="md"
        isActive={path === text ? true : false}
        _focus={{
          outline: "none",
        }}
        w="full"
        _active={{
          bg: cyanColor,
          color: grayColor,
        }}
        _hover={{
          bg: cyanColor,
          color: grayColor,
        }}
        transition="all 0.25s"
      >
        {text}
      </Button>
    </Link>
  );
}
