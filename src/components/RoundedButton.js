import { Button, DarkMode, LightMode } from "@chakra-ui/react";

export default function RoundedButton({ children, ...props }) {
  const variantIsGhost = props.variant == "ghost";

  if (variantIsGhost) {
    return (
      <DarkMode>
        <Button
          {...props}
          borderRadius="full"
          px={6}
          py={6}
          fontWeight="normal"
          colorScheme="brand"
          color="initial"
        >
          {children}
        </Button>
      </DarkMode>
    );
  } else {
    return (
      <LightMode>
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
      </LightMode>
    );
  }
}
