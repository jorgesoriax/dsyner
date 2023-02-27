import { Button, DarkMode, LightMode } from "@chakra-ui/react";
import { Link } from "react-scroll";

export function RoundedButton({ children, ...props }) {
  const variantIsGhost = props.variant == "ghost";

  if (variantIsGhost) {
    return (
      <DarkMode>
        <Button
          minW="fit-content"
          borderRadius="full"
          px={6}
          py={6}
          fontWeight="normal"
          colorScheme="violet"
          color="initial"
          {...props}
        >
          {children}
        </Button>
      </DarkMode>
    );
  } else {
    return (
      <LightMode>
        <Button
          minW="fit-content"
          borderRadius="full"
          px={6}
          py={6}
          fontWeight="normal"
          colorScheme="violet"
          {...props}
        >
          {children}
        </Button>
      </LightMode>
    );
  }
}

export function RoundedScrollButton({ to, children, ...props }) {
  return (
    <Link activeClass="active" to={to} spy={true} smooth={true} duration={500}>
      <RoundedButton {...props} onClick={(e) => e.preventDefault()}>
        {children}
      </RoundedButton>
    </Link>
  );
}
