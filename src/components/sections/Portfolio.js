import { Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { LgContainer } from "../Containers";
import SectionHeader from "../SectionHeader";

export default function Portfolio({ data }) {
  const Project = ({ title, cover, alt }) => {
    return (
      <Image
        w="100%"
        objectFit="cover"
        src={cover}
        alt={alt}
        rounded="2xl"
      />
    );
  };
  const ProjectGrid = () => {
    return (
      <Grid
        w="100%"
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={4}
      >
        {data.projects.map(({ ...props }, i) => (
          <GridItem key={i}>
            <Project {...props} />
          </GridItem>
        ))}
      </Grid>
    );
  };
  const PortfolioContainer = ({ children }) => {
    return (
      <LgContainer>
        <VStack>{children}</VStack>
      </LgContainer>
    );
  };

  return (
    <PortfolioContainer>
      <SectionHeader
        title={data.header.title}
        description={data.header.description}
      />
      <ProjectGrid />
    </PortfolioContainer>
  );
}
