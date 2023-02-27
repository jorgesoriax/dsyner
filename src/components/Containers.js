import { Container } from "@chakra-ui/react";

export function FullContainer({ children, ...props }) {
  return (
    <Container minW="100%" px={{ base: 8, md: 16 }} py={24} {...props}>
      {children}
    </Container>
  );
}

export function LgContainer({ children, ...props }) {
  return (
    <Container maxW="container.lg" px={{ base: 8, md: 0 }} py={24} {...props}>
      {children}
    </Container>
  );
}

export default function MdContainer({ children, ...props }) {
  return (
    <Container maxW="container.md" px={{ base: 8, md: 0 }} py={24} {...props}>
      {children}
    </Container>
  );
}
