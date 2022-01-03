import { Button } from "@chakra-ui/react";

interface HeaderButtonProps {
  isRowDirection: boolean;
  text: string;
}

export function HeaderButton({ isRowDirection, text }: HeaderButtonProps) {
  return (
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
  );
}
