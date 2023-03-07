import { Box, HStack, Stack, VStack } from "@chakra-ui/react";
import { LgContainer } from "../Containers";
import PriceCard from "../PriceCard";
import SectionHeader from "../SectionHeader";

export default function Pricing({ data }) {
  const PriceCardsContainer = () => {
    return (
      <Stack spacing={8} direction={{ base: "column", md: "row" }}>
        {data.priceCards.map(({ ...props }, i) => (
          <PriceCard key={i} {...props} />
        ))}
      </Stack>
    );
  };
  const PricingContainer = ({ children }) => {
    return (
      <LgContainer id="pricing">
        <VStack>{children}</VStack>
      </LgContainer>
    );
  };

  return (
    <PricingContainer>
      <SectionHeader
        title={data.header.title}
        description={data.header.description}
      />
      <PriceCardsContainer />
    </PricingContainer>
  );
}
