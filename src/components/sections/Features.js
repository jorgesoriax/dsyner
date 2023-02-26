import {
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import CrystalBox from "../CrystalBox";
import SectionHeader from "../SectionHeader";

export default function Features() {
  const Feature = () => {
    return (
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={8}
        align="center"
      >
        <CrystalBox boxSize="150px" minW="150px">
          <Flex boxSize="100%" align="center" justify="center">
            <Image
              src="./static/images/features/temp.png"
              alt="temp"
              boxSize="100px"
            />
          </Flex>
        </CrystalBox>
        <Text textAlign={{ base: "center", md: "initial" }}>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere
        </Text>
      </Stack>
    );
  };
  const FeaturesContainer = ({ children }) => {
    return (
      <VStack as="section" spacing={24}>
        {children}
      </VStack>
    );
  };

  return (
    <FeaturesContainer>
      <SectionHeader
        title="Sed ut perspiciatis unde omnis"
        description=" At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti."
      />
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={16}
      >
        <GridItem>
          <Feature />
        </GridItem>
        <GridItem>
          <Feature />
        </GridItem>
        <GridItem>
          <Feature />
        </GridItem>
        <GridItem>
          <Feature />
        </GridItem>
      </Grid>
    </FeaturesContainer>
  );
}
