import {
  Box,
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
import { RoundedButton } from "./buttons";
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
      <VStack w="100%" spacing={0}>
        <Text fontSize="2xl" textAlign="center">
          {title}
        </Text>
        <Description textAlign="center">{description}</Description>
      </VStack>
    );
  };
  const Features = () => {
    return (
      <VStack w="100%" flex="auto">
        <List w="100%" pb={{ base: 8, md: 16 }} px={{ base: 0, md: 4 }}>
          {features.map((feature, i) => (
            <ListItem key={i}>
              <HStack align="start">
                <Box>
                  <CheckIcon width={24} height={24} />
                </Box>
                <Text>{feature}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      </VStack>
    );
  };
  const Price = () => {
    return (
      <Text w="100%" textAlign="center">
        Desde ${price} MXN
      </Text>
    );
  };

  const PriceCardContainer = ({ children }) => {
    return (
      <CrystalBox maxW="250px" variant="sm" {...props}>
        <VStack spacing={{ base: 4, md: 8 }} boxSize="100%">
          {children}
        </VStack>
      </CrystalBox>
    );
  };

  const CTAButton = () => {
    return (
      <RoundedButton
        as={Link}
        w="100%"
        h="50px"
        rightIcon={<ArrowUpRightIcon width={18} height={18} />}
        href={`https://wa.me/8126407713?text=¡Hola! Me interesa ${title}.`}
        isExternal
      >
        Obtener
      </RoundedButton>
    );
  };
  return (
    <PriceCardContainer>
      <Header />
      <VStack w="100%" h="100%" spacing={{ base: 2, md: 4 }}>
        <Features />
        <Price />
        <CTAButton />
      </VStack>
    </PriceCardContainer>
  );
}
