import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { RoundedButton } from "../Buttons";
import MdContainer, { LgContainer } from "../Containers";
import Description from "../Description";
import SectionHeader from "../SectionHeader";

export default function FAQ() {
  const Question = () => {
    return (
      <AccordionItem borderColor="altGray.lighter" border={0}>
        {({ isExpanded }) => (
          <>
            <Heading as="h3">
              <AccordionButton
                p={0}
                pr={{base: 0, md: 4}}
                role="group"
                _hover={{
                  bg: "transparent",
                }}
                _focus={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <Box as="span" flex="1" textAlign="left" py={4} px={{base: 0, md: 4}}>
                  <Text
                    fontSize="xl"
                    fontWeight="medium"
                    _groupHover={{ color: "violet.400" }}
                  >
                    Vel illum qui dolorem eum fugiat quo voluptas nulla
                    pariatur?
                  </Text>
                </Box>
                {isExpanded ? (
                  <Text _groupHover={{ color: "violet.400" }}>
                    <MinusIcon width={24} height={24} />
                  </Text>
                ) : (
                  <Text _groupHover={{ color: "violet.400" }}>
                    <PlusIcon width={24} height={24} />
                  </Text>
                )}
              </AccordionButton>
            </Heading>
            <AccordionPanel>
              <Description>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </Description>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    );
  };
  const ListOfQuestions = () => {
    return (
      <Accordion allowMultiple>
        <Question />
        <Question />
        <Question />
      </Accordion>
    );
  };

  const FAQContainer = ({ children }) => {
    return <MdContainer>{children}</MdContainer>;
  };

  return (
    <FAQContainer>
      <SectionHeader
        title="Sed ut perspiciatis unde omnis"
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti."
      />
      <ListOfQuestions />
    </FAQContainer>
  );
}
