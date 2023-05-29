import { Box } from "@chakra-ui/react";

export default function CrystalBox({ children, variant, ...props }) {
  const BaseCrystalBox = () => {
    return (
      <Box
        bg="linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%);"
        rounded="2xl"
        p="px"
        boxShadow="md"
        {...props}
      >
        <Box boxSize="100%" rounded="2xl" bg="altGray.dark" overflow="hidden">
          {children}
        </Box>
      </Box>
    );
  };
  const SmCrystalBox = () => {
    return (
      <Box
        bg="linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%);"
        rounded="2xl"
        p="px"
        boxShadow="md"
        {...props}
      >
        <Box boxSize="100%" rounded="2xl" bg="altGray.dark" p={6}>
          {children}
        </Box>
      </Box>
    );
  };

  if (variant == "sm") {
    return <SmCrystalBox />;
  } else {
    return <BaseCrystalBox />;
  }
}
