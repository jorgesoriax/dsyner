import { HStack, List, ListItem, Stack, Text, VStack } from "@chakra-ui/react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { RoundedButton } from "./Buttons";
import { LgContainer } from "./Containers";
import Description from "./Description";
import Logo from "./Logo";

export default function Footer({ data }) {
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
            {data.socialMedia.map(({ title, href }, i) => (
              <ListItem key={i}>
                <RoundedButton variant="link">{title}</RoundedButton>
              </ListItem>
            ))}
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
          {data.aboutUs}
        </Description>
        <HStack spacing={8} align="start">
          {data.utility.map(({ title, items }, i) => (
            <List key={i}>
              <VStack
                spacing={4}
                align={{ base: "center", md: "end" }}
                w={{ base: "100%", md: "auto" }}
              >
                {items.map(({ title, href }, i) => (
                  <ListItem key={i}>
                    <RoundedButton variant="link">{title}</RoundedButton>
                  </ListItem>
                ))}
              </VStack>
            </List>
          ))}
        </HStack>
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
        <HStack spacing={4}>
          <SparklesIcon width={24} height={24} />
          <Text textAlign="center">{data.copyright}</Text>
        </HStack>
        <List>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 4, md: 8 }}
            align={{ base: "center", md: "normal" }}
          >
            {data.secondary.map(({title, href}, i) => (
              <ListItem key={i}>
                <RoundedButton variant="link">{title}</RoundedButton>
              </ListItem>
            ))}
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
