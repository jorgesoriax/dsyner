import {
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FullContainer } from "../Containers";
import SectionHeader from "../SectionHeader";

export default function Process({data}) {
  const Step = ({ title, description, image, isEven }) => {
    return (
      <VStack>
        <Stack
          direction={{ base: "column", md: isEven ? "row" : "row-reverse" }}
          align="center"
          justify="center"
          spacing={8}
        >
          <Box boxSize={{ base: "200px", md: "250px" }} display="flex">
            <Image
              boxSize="100%"
              src={image}
              alt="test"
              objectFit="cover"
            />
          </Box>
          <VStack w={{ base: "100%", md: "50%" }} justify="center" align="left">
            <Heading
              textAlign={{ base: "center", md: isEven ? "left" : "right" }}
            >
              {title}
            </Heading>
            <Text textAlign={{ base: "center", md: isEven ? "left" : "right" }}>
              {description}
            </Text>
          </VStack>
        </Stack>
      </VStack>
    );
  };
  const StepList = () => {
    return (
      <>
        {data.steps.map(({...props}, i) => (
          <Step
            key={i}
            isEven={i % 2 == 0}
            {...props}
          />
        ))}
      </>
    );
  };
  const ProcessContainer = ({ children }) => {
    return (
      <FullContainer
        id="process"
        borderY="1px"
        borderColor="altGray.lighter"
        bg="altGray.dark"
      >
        {children}
      </FullContainer>
    );
  };

  return (
    <ProcessContainer>
      <SectionHeader
        title={data.header.title}
        description={data.header.description}
      />
      <StepList />
    </ProcessContainer>
  );
}
