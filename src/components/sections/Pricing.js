import {
  Box,
  Grid,
  GridItem,
  HStack,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LgContainer } from "../DContainer";
import PriceCard from "../PriceCard";
import { SectionHeader } from "../typography";

export default function Pricing({ data }) {
  const PricingTabs = () => {
    return (
      <Tabs size="lg" w="100%" colorScheme="violet" isFitted variant="line">
        <TabList>
          {data.priceTabs.categories.map(({ title }, i) => (
            <Tab key={i}>{title}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.priceTabs.categories.map((item, i) => (
            <TabPanel key={i} px={0} pt={8} pb={0}>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(3, 1fr)",
                }}
                gap={8}
              >
                {item.services.map(({ ...props }, i) => (
                  <GridItem key={i}>
                    <PriceCard {...props} maxW="100%" h="100%" />
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    );
  };
  const PricingContainer = ({ children }) => {
    return (
      <LgContainer id="pricing">
        <VStack>{children}</VStack>
      </LgContainer>
    );
  };

  return (
    <PricingContainer>
      <SectionHeader
        title={data.header.title}
        description={data.header.description}
      />
      <PricingTabs />
    </PricingContainer>
  );
}
