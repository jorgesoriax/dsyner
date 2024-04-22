import { Grid, GridItem } from "@chakra-ui/react";
import DyBox from "../DyBox";
import DyCard from "../dataDisplay/DyPriceCard";
import DyContainer from "../layout/DyContainer_old";
import { DySectionHeader } from "../typography/typography";

export default function Services() {
  return (
    <DyContainer size="xl" bg="lavender.900" borderRadius="xl" p={14}>
      <DySectionHeader
        title="Nuestros servicios"
        description="Todos nuestros servicios cuentan con garantía de satisfacción y revisiones ilimitadas."
        variant="light"
        alignItems="left"
      />
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem>
          <DyCard />
        </GridItem>
        <GridItem>
          <DyCard />
        </GridItem>
        <GridItem>
          <DyCard />
        </GridItem>
        <GridItem>
          <DyCard />
        </GridItem>
      </Grid>
    </DyContainer>
  );
}
