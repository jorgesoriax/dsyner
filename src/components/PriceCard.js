import { HStack, List, ListItem, Stack, Text, VStack } from "@chakra-ui/react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { RoundedButton } from "./Buttons";
import CrystalBox from "./CrystalBox";
import Description from "./Description";

export default function PriceCard({ title, description, features, ...props }) {
  console.log(features);
  const Header = () => {
    return (
      <VStack>
        <Text fontSize="2xl">{title}</Text>
        <Description textAlign="center">{description}</Description>
      </VStack>
    );
  };
  const Features = () => {
    return (
      <List w="100%" pb={{ base: 8, md: 16 }}>
        {features.map((feature, i) => (
          <ListItem key={i}>
            <HStack>
              <CheckIcon width={24} height={24} />
              <Text>{feature}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    );
  };

  const PriceCardContainer = ({ children }) => {
    return (
      <CrystalBox maxW="250px" {...props}>
        <VStack
          spacing={{ base: 4, md: 8 }}
          justify="space-between"
          boxSize="100%"
        >
          {children}
        </VStack>
      </CrystalBox>
    );
  };
  return (
    <PriceCardContainer>
      <VStack spacing={{ base: 4, md: 8 }}>
        <Header />
        <Features />
      </VStack>
      <RoundedButton w="100%">Obtener</RoundedButton>
    </PriceCardContainer>
  );
}
