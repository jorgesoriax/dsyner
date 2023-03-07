import { Box, Flex, Image } from "@chakra-ui/react";

export default function Logo({...props}) {
  return (
    <Box boxSize="50px" minW="50px" justify="center" align="center" {...props}>
      <Flex boxSize="100%" justify="center" align="center">
        <Image src="./favicon.svg" boxSize="40px" objectFit="cover" />
      </Flex>
    </Box>
  );
}
