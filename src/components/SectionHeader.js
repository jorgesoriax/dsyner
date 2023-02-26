import { Heading, Text, VStack } from "@chakra-ui/react";
import Description from "./Description";

export default function SectionHeader({ title, description }) {
  return (
    <VStack>
      <Heading as="h2" textAlign="center">{title}</Heading>
      <Description textAlign="center">{description}</Description>
    </VStack>
  );
}
