import { Box } from "@chakra-ui/react";

export default function CrystalBox({ children, ...props }) {
  return (
    <Box
      {...props}
      bg="linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%);"
      rounded="2xl"
      p="px"
    >
      <Box boxSize="100%" rounded="2xl" bg="dark" p={6}>
        {children}
      </Box>
    </Box>
  );
}
