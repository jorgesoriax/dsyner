import { VStack, Flex, Text, Image, Link } from "@chakra-ui/react";
import { DyHeading, DyParagraph } from "../typography/typography";
import DyContainer from "../layout/DyContainer_old";
import DyBox from "../DyBox";

export default function Hero({ data }) {
  const TextContent = () => {
    return (
      <VStack w="60%" align="center" spacing={4}>
        <DyHeading type="display" textAlign="center">
          Creatividad potenciada para elevar tu identidad
        </DyHeading>
        <DyParagraph type="description" textAlign="center" w="90%">
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
        size="full"
      >
        <VStack spacing={16}>{children}</VStack>
      </DyContainer>
    );
  };

  return (
    <HeroContainer>
      <TextContent />
    </HeroContainer>
  );
}
