import {
  Highlight,
  HStack,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowUpRightIcon, CheckIcon } from "@heroicons/react/24/solid";
import { RoundedButton } from "./Buttons";
import CrystalBox from "./CrystalBox";
import Description from "./Description";

export default function PriceCard({
  title,
  description,
  features,
  price,
  link,
  ...props
}) {
  const Header = () => {
    return (
      <VStack spacing={0}>
        <Text fontSize="2xl" textAlign="center">
          {title}
        </Text>
        <Description textAlign="center">{description}</Description>
      </VStack>
    );
  };
  const Features = () => {
    return (
      <List w="100%" pb={{ base: 8, md: 16 }} px={{ base: 0, md: 4 }}>
        {features.map((feature, i) => (
          <ListItem key={i}>
            <HStack align="start">
              <CheckIcon width={24} height={24} />
              <Text>{feature}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    );
  };
  const Price = () => {
    return (
      <Text w="100%" textAlign="center">
        Desde {price}
      </Text>
    );
  };

  const PriceCardContainer = ({ children }) => {
    return (
      <CrystalBox maxW="250px" variant="sm" {...props}>
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
      <Header />
      <VStack w="100%" spacing={{ base: 2, md: 4 }}>
        <Features />
        <Price />
        {/* <RoundedButton
          as={Link}
          w="100%"
          rightIcon={<ArrowUpRightIcon width={18} height={18} />}
          href="https://wa.me/8112802209"
          isExternal
        >
          Obtener
        </RoundedButton> */}
      </VStack>
    </PriceCardContainer>
  );
}
