import React from "react";
import {
  Box,
  chakra,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
  Link as ChakraLink,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-scroll";

const data = {
  links: ["Option A", "Option B", "Option C"],
  cta: "Get started",
};
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import Button from "./Button";

export default function Navbar() {
  const MobileDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
      <Flex display={{ base: "flex", md: "none" }}>
        <IconButton
          aria-label="Show drawer"
          ref={btnRef}
          onClick={onOpen}
          icon={<Bars3BottomRightIcon />}
          p={2}
          rounded="full"
        />
        <Drawer
          isOpen={isOpen}
          placement="top"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
            <DrawerBody>
              <VStack>
                {data.links.map((item, i) => (
                  <Button key={i} variant="ghost">
                    {item}
                  </Button>
                ))}
              </VStack>
            </DrawerBody>
            <DrawerFooter />
          </DrawerContent>
        </Drawer>
      </Flex>
    );
  };

  return (
    <HStack as="nav" w="100%" py={4} align="center" justify="space-between">
      {/* logo */}
      <Flex boxSize="50px" justify="center" align="center">
        <Image src="./favicon.ico" h="35px" />
      </Flex>
      {/* links */}
      <HStack display={{ base: "none", md: "flex" }}>
        {data.links.map((item, i) => (
          <Button key={i} variant="ghost">
            {item}
          </Button>
        ))}
      </HStack>
      {/* cta */}
      <HStack>
        <Button>{data.cta}</Button>
        <MobileDrawer />
      </HStack>
    </HStack>
  );
}
