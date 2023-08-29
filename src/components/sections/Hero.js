import { VStack, Flex } from "@chakra-ui/react";
import { DyHeading, DyParagraph } from "../typography";
import DyContainer from "../DyContainer";

export default function Hero({ data }) {
  const TextContent = () => {
    return (
      <VStack w="100%" align="center" spacing={4}>
        <DyHeading type="display" textAlign="center">
          Creatividad potenciada para elevar tu identidad
        </DyHeading>
        <DyParagraph type="description" textAlign="center" w="70%">
          {data.textContent.description}
        </DyParagraph>
      </VStack>
    );
  };
  const HeroContainer = ({ children }) => {
    return (
      <DyContainer
        id="hero"
        h={{ base: "auto", md: "calc(100vh - 83px)" }}
        pt={{ base: 16, md: 0 }}
        size="lg"
      >
        <Flex h="100%" align="center" justify="center">
          <VStack spacing={16}>{children}</VStack>
        </Flex>
      </DyContainer>
    );
  };

  return (
    <HeroContainer>
      <TextContent />
    </HeroContainer>
  );
}
