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
import Description from "../Description";

export default function Process({ data }) {
  const Step = ({ title, description, image, isEven }) => {
    return (
      <VStack py={{ base: 4, md: 0 }} w={{ base: "100%", md: "70%" }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          spacing={8}
        >
          <Box boxSize={{ base: "200px", md: "250px" }} display="flex">
            <Image boxSize="100%" src={image} alt="test" objectFit="cover" />
          </Box>
          <VStack w={{ base: "100%", md: "50%" }} justify="center" align="left">
            <Heading
              textAlign={{ base: "center", md: "left" }}
            >
              {title}
            </Heading>
            <Description
              textAlign={{ base: "center", md: "left" }}
            >
              {description}
            </Description>
          </VStack>
        </Stack>
      </VStack>
    );
  };
  const StepList = () => {
    return (
      <Stack spacing={0} justify="center" align="center">
        {data.steps.map(({ ...props }, i) => (
          <Step key={i} isEven={i % 2 == 0} {...props} />
        ))}
      </Stack>
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
