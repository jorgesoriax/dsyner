import {
  Box,
  Flex,
  Heading,
  Highlight,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  ArrowDownIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { RoundedButton, RoundedScrollButton } from "../Buttons";
import { LgContainer } from "../Containers";
import Description from "../Description";

export default function Hero() {
  const TextContent = () => {
    return (
      <VStack w="100%" align={{ base: "center", md: "left" }} spacing={4}>
        <Heading
          as="h1"
          size={{ base: "3xl", md: "4xl" }}
          lineHeight="none"
          fontWeight="bold"
          mb={8}
          textAlign={{ base: "center" }}
        >
          <Highlight query={["hoy", "mismo"]} styles={{ color: "violet.400" }}>
            Consigue hoy mismo tu nueva marca
          </Highlight>
        </Heading>
        <HStack>
          <Description>
            Servicio de diseño gráfico potenciado por IA
          </Description>
          <SparklesIcon width={18} height={18} color="gray" />
        </HStack>
        <Text fontSize="1xl" textAlign={{ base: "center" }}>
          Facilitamos la toma de decisión en la creación de la marca de tu
          negocio. Facilitamos la toma de decisión en la creación de la marca de
          tu negocio.
        </Text>
      </VStack>
    );
  };
  const Actions = () => {
    return (
      <Stack
        direction={{ base: "column", md: "row" }}
        w="100%"
        justify={{ base: "center", md: "left" }}
        spacing={{ base: 4, md: 8 }}
      >
        <RoundedButton>Get started</RoundedButton>
        <RoundedScrollButton
          to="test"
          w="100%"
          variant="ghost"
          rightIcon={<ArrowDownIcon width={18} height={18} />}
        >
          Muéstrame cómo funciona
        </RoundedScrollButton>
      </Stack>
    );
  };
  const Graphic = () => {
    return (
      <Box
        borderRadius="2xl"
        overflow="hidden"
        display={{ base: "none", md: "flex" }}
        h="100%"
      >
        <Image src="static\images\temp.png" alt="temp" objectFit="cover" />
      </Box>
    );
  };
  const Left = ({ children }) => {
    return (
      <VStack
        w={{ base: "100%", md: "45%" }}
        spacing={{ base: 12, md: 24 }}
      >
        {children}
      </VStack>
    );
  };
  const Right = ({ children }) => {
    return (
      <VStack w={{ base: "100%", md: "55%" }}>
        {children}
      </VStack>
    );
  };
  const HeroContainer = ({ children }) => {
    return (
      <LgContainer
        as="section"
        h={{ base: "auto", md: "calc(100vh - 82px)" }}
        pt={{ base: 16, md: 0 }}
        pb={0}
      >
        <Flex h="100%" align="center">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={16}
          >
            {children}
          </Stack>
        </Flex>
      </LgContainer>
    );
  };

  return (
    <HeroContainer>
      <Left>
        <TextContent />
        <Actions />
      </Left>
      <Right>
        <Graphic />
      </Right>
    </HeroContainer>
  );
}
