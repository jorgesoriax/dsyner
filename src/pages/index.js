import Head from "next/head";

// import Hero from "@/components/sections/Hero";
// import Features from "@/components/sections/Features";
// import Process from "@/components/sections/Process";
// import Pricing from "@/components/sections/Pricing";
// import FAQ from "@/components/sections/FAQ";
// import CTA from "@/components/sections/CTA";
import DyFooter from "@/components/navigation/DyFooter";
// import Portfolio from "@/components/sections/Portfolio";

import heroData from "@/data/pages/home/sections/hero";
import featuresData from "@/data/pages/home/sections/features";
import processData from "@/data/pages/home/sections/process";
import servicesData from "@/data/pages/home/sections/services";
import faqData from "@/data/pages/home/sections/faq";
import ctaData from "@/data/pages/home/sections/cta";
import portfolioData from "@/data/pages/home/sections/portfolio";
import meta from "@/data/meta";
import footerData from "@/data/footer";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
  BoltIcon,
  BookmarkIcon,
  DevicePhoneMobileIcon,
  EllipsisHorizontalIcon,
  MinusCircleIcon,
  MinusIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
// import Services from "@/components/sections/Services";
import navbarData from "@/data/navbar";

import {
  ArrowUpRightIcon,
  CheckIcon,
  FireIcon,
} from "@heroicons/react/24/solid";
import DyContainer from "@/components/layout/DyContainer";
import DyNavbar from "@/components/navigation/DyNavbar";
import DyButton from "@/components/forms/DyButton";
import DySectionHeader from "@/components/typography/DySectionHeader";
import DyHeading from "@/components/typography/DyHeading";
import DyText from "@/components/typography/DyText";
import DyBox from "@/components/layout/DyBox";
import DyCard from "@/components/dataDisplay/DyCard";

export default function Home() {
  const cardDirection = useBreakpointValue({
    base: "vertical",
    lg: "horizontal",
  });

  const Hero = ({ data }) => {
    return (
      <DyContainer
        size="xl"
        h={{
          base: "calc(100dvh - 92px - 50px)",
          lg: "calc(100vh - 107.98px - 50px)",
        }}
        maxH="800px"
        mb={0}
      >
        <DyContainer size="sm" mb={0}>
          <DyHeading variant="display" textAlign="center">
            {data.textContent.heading}
          </DyHeading>
          <DyText type="description" textAlign="center">
            {data.textContent.body}
          </DyText>
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: 4, lg: 6 }}
            mt={{ base: 14, lg: 16 }}
          >
            <DyButton
              icon={<FireIcon width="24px" height="24px" />}
              colorScheme="dyLime"
              color="dySteel.900"
              fontWeight="semibold"
            >
              {data.actions.primary.title}
            </DyButton>
            <DyButton variant="ghost" scrollTo={data.actions.secondary.to}>
              {data.actions.secondary.title}
            </DyButton>
          </Stack>
        </DyContainer>
      </DyContainer>
    );
  };
  const Services = ({ data }) => {
    return (
      <DyContainer id="services">
        <DyBox variant="outline" size="lg">
          <DySectionHeader heading="Servicios">
            Lorem ipsum dolor sit amet consectetur. Quis vivamus in aenean
            pulvinar.
          </DySectionHeader>

          <Grid
            templateColumns={{ base: "auto", lg: "repeat(2, 1fr)" }}
            gap={{ base: 4, lg: 6 }}
          >
            {data.services.map(({ title, description, price }, i) => (
              <GridItem key={i}>
                <DyCard
                  heading={title}
                  tag={price}
                  cursor="pointer"
                  _hover={{ bg: "dyViolet.500" }}
                >
                  {description}
                </DyCard>
              </GridItem>
            ))}
          </Grid>

          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: 8, lg: 10 }}
          >
            <DyCard
              direction={cardDirection}
              variant="ghost"
              icon={<BookmarkIcon width="24px" height="24px" />}
              textAlign="center"
            >
              Si no encuentras lo que buscas, por favor, escríbenos y con gusto
              te ofreceremos soluciones personalizadas.
            </DyCard>
            <DyButton
              colorScheme="gray"
              color="dySteel.900"
              fontWeight="semibold"
            >
              Contáctanos
            </DyButton>
          </Stack>
        </DyBox>
      </DyContainer>
    );
  };
  const Features = ({ data }) => {
    return (
      <DyContainer id="features" size="md">
        <Grid
          w="100%"
          templateColumns={{ base: "auto", lg: "repeat(2, 1fr)" }}
          gap={{ base: 14, lg: 16 }}
        >
          {data.features.map(({ title, description }, i) => (
            <GridItem key={i}>
              <DyCard
                variant="ghost"
                icon={<BoltIcon width="24px" height="24px" />}
                heading={title}
                direction={cardDirection}
                textAlign="center"
              >
                {description}
              </DyCard>
            </GridItem>
          ))}
        </Grid>
      </DyContainer>
    );
  };
  const Portfolio = ({ data }) => {
    const PortfolioBody = () => {
      return (
        <Grid
          templateColumns={{ base: "auto", lg: "repeat(3, 1fr)" }}
          gap={{ base: 8, lg: 10 }}
        >
          {data.projects.map(({ heading, body, tag, cover, alt }, i) => (
            <GridItem key={i}>
              <DyCard variant="ghost" src={cover} heading={heading} tag={tag}>
                {body}
              </DyCard>
            </GridItem>
          ))}
        </Grid>
      );
    };
    return (
      <DyContainer id="portfolio" mb={{ base: 20, lg: 24 }}>
        <DyBox variant="outline">
          <DySectionHeader heading="Hecha un ojo a nuestro trabajo">
            Potencia tus emprendimientos y proyectos con diseños personalizados
            a tu medida.
          </DySectionHeader>
          <PortfolioBody />
        </DyBox>
      </DyContainer>
    );
  };
  const CTA = ({ data }) => {
    return (
      <DyContainer size="md">
        <DyBox size="md" bg="dyViolet.500">
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: 14, lg: 16 }}
            mt={{ base: 0, lg: 24 }}
            align={{ base: "center", lg: "end" }}
          >
            <DyCard
              variant="ghost"
              heading={data.textContent.heading}
              borderRadius={0}
            >
              {data.textContent.body}
            </DyCard>
            <DyButton
              colorScheme="gray"
              color="dySteel.900"
              fontWeight="semibold"
              href={data.actions.href}
              isExternal
              icon={<PaperAirplaneIcon width={24} height={24} />}
            >
              {data.actions.title}
            </DyButton>
          </Stack>
        </DyBox>
      </DyContainer>
    );
  };
  const FAQ = ({ data }) => {
    return (
      <DyContainer id="faq" size="sm" py={{ base: 8, lg: 10 }}>
        <DySectionHeader heading="Preguntas clave" mb={{ base: 14, lg: 16 }}>
          Descubre las respuestas a las preguntas más comunes.
        </DySectionHeader>
        <Accordion w="100%" allowToggle>
          <VStack spacing={{ base: 4, lg: 6 }}>
            {data.questions.map(({ question, answer }, i) => (
              <AccordionItem key={i} w="100%" border={0}>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton p={0}>
                      <HStack w="100%" spacing={{ base: 8, lg: 10 }}>
                        <Box as="span" flex="1" textAlign="left">
                          <DyHeading variant="subtitle">{question}</DyHeading>
                        </Box>
                        {isExpanded ? (
                          <MinusIcon width="24" height="24" />
                        ) : (
                          <PlusIcon width="24" height="24" />
                        )}
                      </HStack>
                    </AccordionButton>
                    <AccordionPanel p={0} pt={{ base: 1.5, lg: 2 }}>
                      <DyText type="description">{answer}</DyText>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </VStack>
        </Accordion>
      </DyContainer>
    );
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#6828DF" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <DyNavbar data={navbarData} />
      <Hero data={heroData} />
      <Services data={servicesData} />
      <Features data={featuresData} />
      <Portfolio data={portfolioData} />
      <CTA data={ctaData} />
      <FAQ data={faqData} />
      <DyFooter data={footerData} />
    </>
  );
}
