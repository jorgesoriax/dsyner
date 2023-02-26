import { Heading, Text, VStack } from "@chakra-ui/react";

export default function SectionHeader({ title, description }) {
  return (
    <VStack>
      <Heading as="h2">{title}</Heading>
      <Text color="gray">{description}</Text>
    </VStack>
  );
}
