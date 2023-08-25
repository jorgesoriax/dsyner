import {
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LgContainer } from "../DContainer";
import CrystalBox from "../CrystalBox";
import Description from "../Description";
import { SectionHeader } from "../typography";

export default function Features({ data }) {
  const FeatureItem = ({ title, description, image }) => {
    return (
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={8}
        align="center"
      >
        <CrystalBox boxSize="100px" minW="100px">
          <Image src={image} alt="temp" boxSize="100%" />
        </CrystalBox>
        <Stack>
          <Text textAlign={{ base: "center", md: "left" }} fontSize="xl">
            {title}
          </Text>
          <Description textAlign={{ base: "center", md: "initial" }}>
            {description}
          </Description>
        </Stack>
      </Stack>
    );
  };
  const Features = () => {
    return (
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={16}
      >
        {data.features.map(({ ...props }, i) => (
          <GridItem key={i}>
            <FeatureItem {...props} />
          </GridItem>
        ))}
      </Grid>
    );
  };
  const FeaturesContainer = ({ children }) => {
    return (
      <LgContainer id="features">
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
      <Features />
    </FeaturesContainer>
  );
}
