import {
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LgContainer } from "../Containers";
import CrystalBox from "../CrystalBox";
import SectionHeader from "../SectionHeader";

export default function Features({data}) {
  const Feature = ({ title, description }) => {
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
        <Stack>
          <Text textAlign="left" fontSize="xl">
            {title}
          </Text>
          <Text textAlign={{ base: "center", md: "initial" }}>
            {description}
          </Text>
        </Stack>
      </Stack>
    );
  };
  const FeatureGrid = () => {
    return (
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={16}
      >
        {data.features.map((item, i) => (
          <GridItem key={i}>
            <Feature
              title={item.title}
              test="dasdas"
              description={item.description}
            />
          </GridItem>
        ))}
      </Grid>
    );
  };
  const FeaturesContainer = ({ children }) => {
    return (
      <LgContainer as="section">
        <VStack>{children}</VStack>
      </LgContainer>
    );
  };

  return (
    <FeaturesContainer>
      <SectionHeader
        title={data.header.title}
        description={data.header.description}
      />
      <FeatureGrid />
    </FeaturesContainer>
  );
}
