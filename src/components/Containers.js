import { Container } from "@chakra-ui/react";

export function FullContainer({ children, ...props }) {
  return (
    <Container as="section" minW="100%" px={{ base: 8, md: 16 }} py={{base: 16, md: 24}} scrollMarginTop="98px" {...props}>
      {children}
    </Container>
  );
}

export function LgContainer({ children, ...props }) {
  return (
    <Container as="section" maxW="container.lg" px={{ base: 8, md: 0 }} py={{base: 16, md: 24}} scrollMarginTop="98px" {...props}>
      {children}
    </Container>
  );
}

export default function MdContainer({ children, ...props }) {
  return (
    <Container as="section" maxW="container.md" px={{ base: 8, md: 0 }} py={{base: 16, md: 24}} scrollMarginTop="98px" {...props}>
      {children}
    </Container>
  );
}
