import {
  Box,
  Button,
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

export default function Hero() {
  const TextContent = () => {
    return (
      <VStack w="100%" align="left" spacing={4}>
        <Heading as="h1" size="4xl" lineHeight="none" fontWeight="bold" mb={8}>
          <Highlight query={["hoy", "mismo"]} styles={{ color: "cyan.400" }}>
            Consigue hoy mismo tu nueva marca
          </Highlight>
        </Heading>
        <HStack>
          <Text color="gray">Servicio de diseño gráfico potenciado por IA</Text>
          <SparklesIcon width={18} height={18} color="gray" />
        </HStack>
        <Text fontSize="1xl">
          Facilitamos la toma de decisión en la creación de la marca de tu
          negocio. Facilitamos la toma de decisión en la creación de la marca de
          tu negocio.
        </Text>
      </VStack>
    );
  };
  const Actions = () => {
    return (
      <HStack w="100%" justify="left" spacing={8}>
        <Button>Get started</Button>
        <Button
          variant="ghost"
          rightIcon={<ArrowDownIcon width={18} height={18} />}
        >
          Muéstrame cómo funciona
        </Button>
      </HStack>
    );
  };
  const Graphic = () => {
    return (
      <Box borderRadius="2xl" overflow="hidden">
        <Image boxSize="500px" src="static\images\temp.png" alt="temp"/>
      </Box>
    );
  };
  const HeroContainer = ({ children }) => {
    return (
      <VStack
        as="section"
        h={{ base: "calc(100vh - 100px)", md: "calc(100vh - 75px)" }}
        align="left"
        justify="center"
      >
        {children}
      </VStack>
    );
  };

  return (
    <HeroContainer>
      <Stack direction="row" spacing={24}>
        <VStack w="45%" spacing={24}>
          <TextContent />
          <Actions />
        </VStack>
        <VStack w="55%">
          <Graphic />
        </VStack>
      </Stack>
    </HeroContainer>
  );
}
