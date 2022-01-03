import Link from "next/link";

import { Button } from "@chakra-ui/react";

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
  return (
    <Link href={href} passHref>
      <Button
        colorScheme="cyan"
        variant={isRowDirection ? "ghost" : "outline"}
        size={isRowDirection ? "md" : "sm"}
        _focus={{
          outline: "none",
        }}
        w="full"
      >
        {text}
      </Button>
    </Link>
  );
}
