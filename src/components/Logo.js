import { Box, Flex, Image } from "@chakra-ui/react";

export default function Logo({ variant, ...props }) {
  if (variant == "symbol") {
    return (
      <Box
        boxSize="50px"
        minW="50px"
        justify="center"
        align="center"
        {...props}
      >
        <Flex boxSize="100%" justify="center" align="center">
          <Image src="./white_symbol.svg" boxSize="40px" objectFit="contain" />
        </Flex>
      </Box>
    );
  } else {
    return (
      <Box h="50px" justify="center" align="center" {...props}>
        <Flex boxSize="100%" justify="center" align="center">
          <Image
            src="./white_horizontal_logo.svg"
            w="170px"
            objectFit="cover"
          />
        </Flex>
      </Box>
    );
  }
}
