import { Box, Flex, Image } from "@chakra-ui/react";

export  function Logo({...props}) {
  return (
    <Box boxSize="50px" minW="50px" justify="center" align="center" {...props}>
      <Flex boxSize="100%" justify="center" align="center">
        <Image src="./favicon.svg" boxSize="40px" objectFit="contain" />
      </Flex>
    </Box>
  );
}

export function HLogo({...props}) {
  return (
    <Box h="50px" justify="center" align="center" {...props}>
      <Flex boxSize="100%" justify="center" align="center">
        <Image src="./w-horizontal-logo.svg" w="170px" objectFit="cover" />
      </Flex>
    </Box>
  )
}