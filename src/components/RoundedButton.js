import { Button } from "@chakra-ui/react";

export default function RoundedButton({ children, ...props }) {
  return (
    <Button
      {...props}
      borderRadius="full"
      px={6}
      py={6}
      fontWeight="normal"
      colorScheme="brand"
    >
      {children}
    </Button>
  );
}
