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
import { LgContainer } from "../Containers";
import PriceCard from "../PriceCard";
import SectionHeader from "../SectionHeader";

export default function Pricing({ data }) {
  const PriceCardsContainer = () => {
    return (
      <Stack spacing={8} direction={{ base: "column", md: "row" }}>
        {data.priceCards.map(({ ...props }, i) => (
          <PriceCard key={i} {...props} />
        ))}
      </Stack>
    );
  };
  const PricingTab = () => {
    return (
      <Tabs size="lg" w="100%" colorScheme="violet" isFitted variant="enclosed">
        <TabList>
          {data.priceTabs.categories.map(({ title }, i) => (
            <Tab key={i}>{title}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.priceTabs.categories.map((item, i) => (
            <TabPanel key={i} px={0} pt={8} pb={0}>
              <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(3, 1fr)"}} gap={8}>
                {item.services.map(({ ...props }, i) => (
                  <GridItem>
                    <PriceCard key={i} {...props} maxW="100%" h="100%"/>
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>
          ))}
          {/* <p>Diseño de página web</p> */}
          {/* <p>Página de redes sociales</p> */}
          {/* <p>Feed de redes sociales</p> */}
          {/* <p>Ilustraciones</p> */}
          {/* <p>Flyer</p> */}
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
      {/* <PriceCardsContainer />  */}
      <PricingTab />
    </PricingContainer>
  );
}
