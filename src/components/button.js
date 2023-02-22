import { Button as ChakraButton } from "@chakra-ui/react";

export default function Button({ children, ...props }) {
  return (
    <ChakraButton
      {...props}
      borderRadius="full"
      px={6}
      py={6}
      fontWeight="normal"
      colorScheme="brand"
    >
      {children}
    </ChakraButton>
  );
}
