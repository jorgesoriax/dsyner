import { Container, Text } from "@chakra-ui/react";

export default function DyContainer({ children, size, ...props }) {
  const stylesBySize = {
    base: {
      w: "auto",
      maxW: "auto",
      px: { base: 8, md: 0 },
      py: { base: 16, md: 24 },
    },
    full: {
      w: "100%",
      maxW: "1920px",
      px: { base: 8, md: 16 },
    },
    lg: {
      maxW: "container.lg",
    },
    md: {
      maxW: "container.md",
    },
  };

  const styles = {
    ...stylesBySize.base,
    ...(stylesBySize[size] || {}),
  };

  return (
    <Container
      as="section"
      w={styles.w}
      maxW={styles.maxW}
      px={styles.px}
      py={styles.py}
      scrollMarginTop="98px"
      {...props}
    >
      {children}
    </Container>
  );
}
