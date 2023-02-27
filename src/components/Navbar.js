import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { RoundedButton } from "./Buttons";
import { LgContainer } from "./Containers";


const data = {
  links: ["Option A", "Option B", "Option C"],
  cta: "Get started",
};

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
                  <RoundedButton key={i} variant="ghost">
                    {item}
                  </RoundedButton>
                ))}
              </VStack>
            </DrawerBody>
            <DrawerFooter />
          </DrawerContent>
        </Drawer>
      </Flex>
    );
  };
  const Logo = () => {
    return (
      <Flex boxSize="50px" justify="center" align="center">
        <Image src="./favicon.ico" h="35px" />
      </Flex>
    );
  };
  const Links = () => {
    return (
      <HStack display={{ base: "none", md: "flex" }}>
        {data.links.map((item, i) => (
          <RoundedButton key={i} variant="ghost">
            {item}
          </RoundedButton>
        ))}
      </HStack>
    );
  };
  const Actions = () => {
    return (
      <HStack>
        <RoundedButton>{data.cta}</RoundedButton>
        <MobileDrawer />
      </HStack>
    );
  };

  const NavbarContainer = ({ children }) => {
    return (
      <LgContainer as="nav" mb={0} py={0}>
        <HStack py={4} align="center" justify="space-between">
          {children}
        </HStack>
      </LgContainer>
    );
  };

  return (
    <NavbarContainer>
      <Logo />
      <Links />
      <Actions />
    </NavbarContainer>
  );
}
