import { HStack, List, ListItem, Stack, Text, VStack } from "@chakra-ui/react";
import { RoundedButton } from "./Buttons";
import { LgContainer } from "./Containers";
import Description from "./Description";
import Logo from "./Logo";

export default function Footer() {
  const SocialMedia = () => {
    return (
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={8}
        justify={{ base: "center", md: "space-between" }}
        align="center"
      >
        <Logo />
        <List>
          <HStack
            spacing={0}
            justify="center"
            rowGap={2}
            columnGap={8}
            wrap="wrap"
          >
            <ListItem>
              <RoundedButton variant="link">Instagram</RoundedButton>
            </ListItem>
            <ListItem>
              <RoundedButton variant="link">Behance</RoundedButton>
            </ListItem>
            <ListItem>
              <RoundedButton variant="link">Dribbble</RoundedButton>
            </ListItem>
            <ListItem>
              <RoundedButton variant="link">Dribbble</RoundedButton>
            </ListItem>
            <ListItem>
              <RoundedButton variant="link">Dribbble</RoundedButton>
            </ListItem>
            <ListItem>
              <RoundedButton variant="link">Dribbble</RoundedButton>
            </ListItem>
          </HStack>
        </List>
      </Stack>
    );
  };
  const Utility = () => {
    return (
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 16, md: 8 }}
        justify="space-between"
        align={{ base: "center", md: "end" }}
        borderBottom="1px"
        borderColor="altGray.lighter"
        pb={8}
      >
        <Description maxW="550px" textAlign={{ base: "center", md: "left" }}>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere. Nam libero tempore,
          cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
          quod maxime placeat facere. Nam libero tempore, cum soluta nobis est
          eligendi optio cumque nihil impedit quo minus id quod maxime placeat
          facere.
        </Description>
        <List>
          <VStack
            spacing={4}
            align={{ base: "center", md: "end" }}
            w={{ base: "100%", md: "auto" }}
          >
            <ListItem>
              <RoundedButton variant="link">52+ 81 2345 6378</RoundedButton>
            </ListItem>
            <ListItem>
              <RoundedButton variant="link">example@email.com</RoundedButton>
            </ListItem>
          </VStack>
        </List>
      </Stack>
    );
  };
  const Secondary = () => {
    return (
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        justify="space-between"
        spacing={16}
      >
        <Text textAlign="center">@copyright 2023</Text>
        <List>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 4, md: 8 }}
            align={{ base: "center", md: "normal" }}
          >
            <ListItem>
              <RoundedButton variant="link">Option A</RoundedButton>
            </ListItem>
            <ListItem>
              <RoundedButton variant="link">Option B</RoundedButton>
            </ListItem>
          </Stack>
        </List>
      </Stack>
    );
  };
  const FooterContainer = ({ children }) => {
    return (
      <LgContainer as="footer">
        <Stack spacing={8}>{children}</Stack>
      </LgContainer>
    );
  };
  return (
    <FooterContainer>
      <SocialMedia />
      <Utility />
      <Secondary />
    </FooterContainer>
  );
}
