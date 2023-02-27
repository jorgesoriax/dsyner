import { HStack, VStack } from "@chakra-ui/react";
import { LgContainer } from "../Containers";
import PriceCard from "../PriceCard";
import SectionHeader from "../SectionHeader";

export default function Pricing() {
  const PriceCardsContainer = () => {
    return (
      <HStack spacing={16}>
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </HStack>
    );
  };
  const PricingContainer = ({ children }) => {
    return (
      <LgContainer as="section">
        <VStack>{children}</VStack>
      </LgContainer>
    );
  };

  return (
    <PricingContainer>
      <SectionHeader
        title="Sed ut perspiciatis unde omnis"
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti."
      />
      <PriceCardsContainer />
    </PricingContainer>
  );
}
