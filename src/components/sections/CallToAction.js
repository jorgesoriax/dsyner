import { Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { RoundedButton } from "../Buttons";
import { LgContainer } from "../Containers";

export default function CallToAction() {
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
          Sed ut perspiciatis unde
        </Heading>
        <Text color="whiteAlpha.700" textAlign={{ base: "center", md: "left" }}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
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
        Get Started
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
          bg="violet.500"
          justify="space-between"
          align={{ base: "center", md: "end" }}
          spacing={8}
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
