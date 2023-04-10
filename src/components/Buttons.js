import { Box, Button, DarkMode, LightMode } from "@chakra-ui/react";
import { Link } from "react-scroll";
import LogoSimple, { Logo, HLogoSimple } from "./Logo";

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

export function RoundedScrollButton({ to, display, children, ...props }) {
  return (
    <Box display={display}>
      <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        offset={-83}
      >
        <RoundedButton onClick={(e) => e.preventDefault()} {...props}>
          {children}
        </RoundedButton>
      </Link>
    </Box>
  );
}

export const LogoScrollButton = ({ to, display, ...props }) => {
  return (
    <Box display={display}>
      <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        offset={-83}
      >
        <Logo cursor="pointer" {...props} />
      </Link>
    </Box>
  );
};

export const LogoSimpleScrollButton = ({ to, display, ...props }) => {
  return (
    <Box display={display}>
      <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        offset={-83}
      >
        <LogoSimple cursor="pointer" {...props} />
      </Link>
    </Box>
  );
};

export const HLogoSimpleScrollButton = ({ to, display, ...props }) => {
  return (
    <Box display={display}>
      <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        offset={-83}
      >
        <HLogoSimple cursor="pointer" {...props} />
      </Link>
    </Box>
  );
};
