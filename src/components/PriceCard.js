import { HStack, List, ListItem, Stack, Text, VStack } from "@chakra-ui/react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { RoundedButton } from "./Buttons";
import CrystalBox from "./CrystalBox";
import Description from "./Description";

export default function PriceCard() {
  const Header = () => {
    return (
      <VStack>
        <Text fontSize="2xl">Basic</Text>
        <Description textAlign="center">
          The basic package includes a little service :(
        </Description>
      </VStack>
    );
  };
  const Features = () => {
    return (
      <List w="100%" pb={16}>
        <ListItem>
          <HStack>
            <CheckIcon width={24} height={24} />
            <Text>This is a feature A</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack>
            <CheckIcon width={24} height={24} />
            <Text>This is a feature B</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack>
            <CheckIcon width={24} height={24} />
            <Text>This is a feature C</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack>
            <CheckIcon width={24} height={24} />
            <Text>This is a feature D</Text>
          </HStack>
        </ListItem>
      </List>
    );
  };

  const PriceCardContainer = ({ children }) => {
    return (
      <CrystalBox minW="250px">
        <VStack spacing={8}>{children}</VStack>
      </CrystalBox>
    );
  };
  return (
    <PriceCardContainer>
      <Header />
      <Features />
      <RoundedButton w="100%">Obtener</RoundedButton>
    </PriceCardContainer>
  );
}
