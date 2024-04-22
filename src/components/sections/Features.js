import { Grid, GridItem, Image, Stack, Text, VStack } from "@chakra-ui/react";
import CrystalBox from "../CrystalBox";
import { DyHeading, DyParagraph, DySectionHeader } from "../typography/typography";
import DyContainer from "../layout/DyContainer_old";

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
          {/* <Text textAlign={{ base: "center", md: "left" }} fontSize="xl"></Text> */}
          <DyHeading type="subtitle">{title}</DyHeading>
          <DyParagraph type="description">{description}</DyParagraph>
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
      <DyContainer id="features" size="lg">
        <VStack>{children}</VStack>
      </DyContainer>
    );
  };

  return (
    <FeaturesContainer>
      <DySectionHeader
        title={data.header.title}
        description={data.header.description}
        variant="light"
      />
      <Features />
    </FeaturesContainer>
  );
}
