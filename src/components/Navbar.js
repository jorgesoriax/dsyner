import React from "react";
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
  Text,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import {
  LogoScrollButton,
  RoundedButton,
  RoundedScrollButton,
} from "./buttons";
import DContainer from "./DyContainer";

export default function Navbar({ data }) {
  const LogoScrollButtonVariant = useBreakpointValue({
    base: "symbol",
    lg: "",
  });
  const MobileDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
      <Flex display={{ base: "none", md: "none" }}>
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
                    {item.title}
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
  const Links = () => {
    return (
      <HStack display={{ base: "none", md: "flex" }}>
        {data.links.map(({ title, to }, i) => (
          <RoundedScrollButton key={i} variant="ghost" to={to}>
            {title}
          </RoundedScrollButton>
        ))}
      </HStack>
    );
  };
  // const Actions = () => {
  //   return (
  //     <HStack>
  //       <RoundedScrollButton to={data.cta.to}>
  //         {data.cta.title}
  //       </RoundedScrollButton>
  //       <MobileDrawer />
  //     </HStack>
  //   );
  // };
  const NavbarContainer = ({ children }) => {
    return (
      <DContainer
        as="nav"
        mb={0}
        py={0}
        pos="sticky"
        top={0}
        bg="altGray.darkerRGBA"
        zIndex="sticky"
        backdropFilter="auto"
        backdropBlur="2px"
        borderBottom="1px"
        borderColor="altGray.dark"
        size="full"
      >
        <HStack py={4} align="center" justify="space-between">
          {children}
        </HStack>
      </DContainer>
    );
  };

  return (
    <NavbarContainer>
      <LogoScrollButton to="hero" variant={LogoScrollButtonVariant} />
      <Links />
    </NavbarContainer>
  );
}
