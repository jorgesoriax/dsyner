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
import { ArrowDownIcon, SparklesIcon } from "@heroicons/react/24/solid";
import { RoundedButton, RoundedScrollButton } from "../Buttons";
import { LgContainer } from "../Containers";
import Description from "../Description";

export default function Hero({ data }) {
  const TextContent = () => {
    return (
      <VStack w="100%" align={{ base: "center", md: "start" }} spacing={4}>
        <Heading
          as="h1"
          size={{ base: "3xl", md: "4xl" }}
          lineHeight="none"
          fontWeight="bold"
          mb={8}
          textAlign={{ base: "center", md: "left" }}
        >
          <Highlight
            query={data.textContent.header.highlight}
            styles={{ color: "violet.400" }}
          >
            {data.textContent.header.text}
          </Highlight>
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          w="100%"
        >
          <SparklesIcon width={24} height={24} color="gray" />
          <Description align="center">
            {data.textContent.caption}
          </Description>
        </Stack>
        <Text fontSize="1xl" textAlign={{ base: "center", md: "left" }}>
          {data.textContent.description}
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
        align="center"
        spacing={{ base: 4, md: 8 }}
      >
        <RoundedScrollButton to={data.actions.primary.to}>
          {data.actions.primary.title}
        </RoundedScrollButton>
        <RoundedScrollButton
          to={data.actions.secondary.to}
          w="100%"
          variant="ghost"
          rightIcon={<ArrowDownIcon width={24} height={24} />}
        >
          {data.actions.secondary.title}
        </RoundedScrollButton>
      </Stack>
    );
  };
  const HeroImage = () => {
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
      <VStack w={{ base: "100%", md: "55%" }} spacing={{ base: 12, md: 24 }}>
        {children}
      </VStack>
    );
  };
  const Right = ({ children }) => {
    return <VStack w={{ base: "100%", md: "45%" }}>{children}</VStack>;
  };
  const HeroContainer = ({ children }) => {
    return (
      <LgContainer
        id="hero"
        h={{ base: "auto", md: "calc(100vh - 83px)" }}
        pt={{ base: 16, md: 0 }}
        py={0}
      >
        <Flex h="100%" align="center" justify="center">
          <Stack direction={{ base: "column", md: "row" }} spacing={16}>
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
        <HeroImage />
      </Right>
    </HeroContainer>
  );
}
