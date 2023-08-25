import React from "react";
import {
  Box,
  Collapse,
  Grid,
  GridItem,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FullContainer } from "../DContainer";
import { RoundedButton } from "../buttons";
import CrystalBox from "../CrystalBox";
import { SectionHeader } from "../typography";

export default function Portfolio({ data }) {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  const Project = ({ title, cover, alt }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const showModal = useBreakpointValue({ base: false, lg: true });

    const ImageModal = () => {
      return (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          size={{ base: "full", lg: "4xl" }}
        >
          <ModalOverlay />
          <ModalContent rounded="2xl" bg="altGray.dark">
            <CrystalBox>
              <ModalBody p={0} mb={6}>
                <Image
                  w="100%"
                  objectFit="cover"
                  src={cover}
                  alt={alt}
                  rounded="xl"
                />
              </ModalBody>

              <ModalFooter p={0}>
                <HStack justify="space-between" w="full">
                  <Text>{title}</Text>
                  <RoundedButton onClick={onClose}>Cerrar</RoundedButton>
                </HStack>
              </ModalFooter>
            </CrystalBox>
          </ModalContent>
        </Modal>
      );
    };

    if (showModal) {
      return (
        <>
          <Image
            w="100%"
            objectFit="cover"
            src={cover}
            alt={alt}
            rounded="2xl"
            // onClick={onOpen}
            // cursor="pointer"
          />
          <ImageModal />
        </>
      );
    } else {
      return (
        <Image
          display={{ base: "initial", lg: "none" }}
          w="100%"
          objectFit="cover"
          src={cover}
          alt={alt}
          rounded="2xl"
        />
      );
    }
  };
  const ProjectGrid = () => {
    const GradientBox = () => {
      return (
        <Box
          bg="altGray.gradient"
          pos="absolute"
          w="100%"
          h="50%"
          bottom={0}
          display={show ? "none" : "block"}
        />
      );
    };

    return (
      <VStack spacing={8}>
        <Collapse startingHeight={750} in={show}>
          <Box h="100%" pos="relative">
            <Grid
              w="100%"
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              gap={4}
              overflow="hidden"
            >
              {data.projects.map(({ ...props }, i) => (
                <GridItem key={i}>
                  <Project {...props} />
                </GridItem>
              ))}
            </Grid>
            <GradientBox />
          </Box>
        </Collapse>
        <RoundedButton
          mt={4}
          aria-label="Show more projects"
          onClick={handleToggle}
        >
          {show ? "Okey, muestrame menos" : "Dejame ver más"}
        </RoundedButton>
      </VStack>
    );
  };
  const PortfolioContainer = ({ children }) => {
    return (
      <FullContainer id="portfolio">
        <VStack spacing={0}>{children}</VStack>
      </FullContainer>
    );
  };

  return (
    <PortfolioContainer>
      <SectionHeader
        title={data.header.title}
        description={data.header.description}
      />
      <ProjectGrid />
    </PortfolioContainer>
  );
}
