import {
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { LgContainer } from "../Containers";
import SectionHeader from "../SectionHeader";
import { RoundedButton } from "../Buttons";
import CrystalBox from "../CrystalBox";

export default function Portfolio({ data }) {
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
            onClick={onOpen}
            cursor="pointer"
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
    return (
      <Grid
        w="100%"
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={4}
      >
        {data.projects.map(({ ...props }, i) => (
          <GridItem key={i}>
            <Project {...props} />
          </GridItem>
        ))}
      </Grid>
    );
  };
  const PortfolioContainer = ({ children }) => {
    return (
      <LgContainer>
        <VStack>{children}</VStack>
      </LgContainer>
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
