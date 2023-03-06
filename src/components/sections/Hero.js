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

export default function Hero({data}) {
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
        <HStack>
          <SparklesIcon width={24} height={24} color="gray" />
          <Description>{data.textContent.caption}</Description>
        </HStack>
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
        spacing={{ base: 4, md: 8 }}
      >
        <RoundedButton>{data.actions.primary}</RoundedButton>
        <RoundedScrollButton
          to="test"
          w="100%"
          variant="ghost"
          rightIcon={<ArrowDownIcon width={18} height={18} />}
        >
          {data.actions.secondary}
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
      <VStack w={{ base: "100%", md: "45%" }} spacing={{ base: 12, md: 24 }}>
        {children}
      </VStack>
    );
  };
  const Right = ({ children }) => {
    return <VStack w={{ base: "100%", md: "55%" }}>{children}</VStack>;
  };
  const HeroContainer = ({ children }) => {
    return (
      <LgContainer
        as="section"
        h={{ base: "auto", md: "calc(100vh - 82px)" }}
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
