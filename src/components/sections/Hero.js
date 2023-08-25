import {
  Box,
  Flex,
  Heading,
  Highlight,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowDownIcon, SparklesIcon } from "@heroicons/react/24/solid";
import Description from "../Description";
import { Display } from "../typography";
import DContainer from "../DContainer";

export default function Hero({ data }) {
  const TextContent = () => {
    return (
      <VStack w="100%" align={{ base: "center", md: "start" }} spacing={4}>
        <Display textAlign="center">
          <Highlight
            query={["Creatividad", "potenciada"]}
            styles={{ color: "serum.400" }}
          >
            Creatividad potenciada para elevar tu identidad
          </Highlight>
        </Display>
        <Text fontSize="1xl" textAlign={{ base: "center", md: "center" }}>
          {data.textContent.description}
        </Text>
      </VStack>
    );
  };
  // const Actions = () => {
  //   return (
  //     <Stack
  //       direction={{ base: "column", md: "row" }}
  //       w="100%"
  //       justify={{ base: "center", md: "left" }}
  //       align="center"
  //       spacing={{ base: 4, md: 8 }}
  //     >
  //       <RoundedScrollButton to={data.actions.primary.to}>
  //         {data.actions.primary.title}
  //       </RoundedScrollButton>
  //       <RoundedScrollButton
  //         to={data.actions.secondary.to}
  //         w="100%"
  //         variant="ghost"
  //         rightIcon={<ArrowDownIcon width={24} height={24} />}
  //       >
  //         {data.actions.secondary.title}
  //       </RoundedScrollButton>
  //     </Stack>
  //   );
  // };
  const HeroContainer = ({ children }) => {
    return (
      <DContainer
        id="hero"
        h={{ base: "auto", md: "calc(100vh - 83px)" }}
        pt={{ base: 16, md: 0 }}
        // py={0}
        size="lg"
      >
        <Flex h="100%" align="center" justify="center">
          <Stack direction={{ base: "column", md: "row" }} spacing={16}>
            {children}
          </Stack>
        </Flex>
      </DContainer>
    );
  };

  return (
    <HeroContainer>
      <TextContent />
    </HeroContainer>
  );
}
