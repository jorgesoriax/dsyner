import { Button, DarkMode, LightMode } from "@chakra-ui/react";
import { Link } from "react-scroll";

export function RoundedButton({ children, ...props }) {
  const variantIsGhost = props.variant == "ghost";
  const variantIsLink = props.variant == "link";

  const GhostButton = () => {
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
  };
  const BaseButton = () => {
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
  };
  const LinkButton = () => {
    return (
      <Button minW="fit-content" fontWeight="normal" {...props}>
        {children}
      </Button>
    );
  };

  if (variantIsGhost) {
    return <GhostButton />;
  } else if (variantIsLink) {
    return <LinkButton />;
  } else {
    return <BaseButton />;
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
