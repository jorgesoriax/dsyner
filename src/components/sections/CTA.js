import { Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { RoundedButton } from "../Buttons";
import { LgContainer } from "../Containers";

export default function CTA({ data }) {
  const TextContent = () => {
    return (
      <VStack w={{ base: "100%", md: "60%" }}>
        <Heading
          as="h3"
          fontSize="2xl"
          fontWeight="medium"
          w="100%"
          textAlign={{ base: "center", md: "left" }}
        >
          {data.textContent.title}
        </Heading>
        <Text color="whiteAlpha.700" textAlign={{ base: "center", md: "left" }}>
          {data.textContent.description}
        </Text>
      </VStack>
    );
  };
  const Actions = () => {
    return (
      <RoundedButton
        colorScheme="gray"
        color="violet.500"
        fontWeight="semibold"
      >
        {data.actions.title}
      </RoundedButton>
    );
  };
  const CallToActionContainer = ({ children }) => {
    return (
      <LgContainer>
        <Stack
          direction={{ base: "column", md: "row" }}
          borderRadius="2xl"
          p={8}
          justify="space-between"
          align={{ base: "center", md: "end" }}
          spacing={8}
          bg="violet.500"
          bgImage={{ base: "none", md: "url(./static/images/cta-bg.png)" }}
          bgRepeat="no-repeat"
          bgPos="right"
          bgSize="contain"
        >
          {children}
        </Stack>
      </LgContainer>
    );
  };
  return (
    <CallToActionContainer>
      <TextContent />
      <Actions />
    </CallToActionContainer>
  );
}
