import {
  Box,
  calc,
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
  ArrowLongDownIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-scroll";
import RoundedButton from "../RoundedButton";
import RoundedScrollButton from "../RoundedScrollButton";

export default function Hero() {
  const TextContent = () => {
    return (
      <VStack w="100%" align={{ base: "center", md: "left" }} spacing={4}>
        <Heading as="h1" size={{base: "3xl", md: "4xl"}} lineHeight="none" fontWeight="bold" mb={8} textAlign={{base: "center"}}>
          <Highlight query={["hoy", "mismo"]} styles={{ color: "brand.400" }}>
            Consigue hoy mismo tu nueva marca
          </Highlight>
        </Heading>
        <HStack>
          <Text color="gray">Servicio de diseño gráfico potenciado por IA</Text>
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
        spacing={{base: 4, md: 8}}
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
      <Box borderRadius="2xl" overflow="hidden" display={{ base: "none", md: "flex" }}>
        <Image boxSize="500px" src="static\images\temp.png" alt="temp" />
      </Box>
    );
  };
  const HeroContainer = ({ children }) => {
    return (
      <VStack
        as="section"
        h={{ base: "auto", md: "calc(100vh - 82px)" }}
        align="left"
        justify="center"
        pt={{base: 16, md: 0}}
      >
        {children}
      </VStack>
    );
  };

  return (
    <HeroContainer>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={24}
      >
        <VStack w={{ base: "100%", md: "45%" }} spacing={{base: 12, md: 24}}>
          <TextContent />
          <Actions />
        </VStack>
        <VStack w={{ base: "100%", md: "55%" }}>
          <Graphic />
        </VStack>
      </Stack>
    </HeroContainer>
  );
}
