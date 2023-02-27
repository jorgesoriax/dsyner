import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { RoundedButton } from "../Buttons";
import { LgContainer } from "../Containers";

export default function CallToAction() {
  const TextContent = () => {
    return (
      <VStack w="60%">
        <Heading as="h3" fontSize="xl" fontWeight="medium" w="100%">
          Sed ut perspiciatis unde omnis
        </Heading>
        <Text color="whiteAlpha.700">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est...
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
        <HStack
          borderRadius="2xl"
          p={8}
          bg="violet.500"
          justify="space-between"
          align="end"
        >
          {children}
        </HStack>
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
