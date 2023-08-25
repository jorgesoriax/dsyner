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
import { RoundedButton } from "../buttons";
import MdContainer, { LgContainer } from "../DContainer";
import Description from "../Description";
import { SectionHeader } from "../typography";

export default function FAQ({data}) {
  const Question = ({ question, answer }) => {
    return (
      <AccordionItem borderColor="altGray.lighter" border={0}>
        {({ isExpanded }) => (
          <>
            <Heading as="h3">
              <AccordionButton
                p={0}
                pr={{ base: 0, md: 4 }}
                role="group"
                _hover={{
                  bg: "transparent",
                }}
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  py={4}
                  px={{ base: 0, md: 4 }}
                >
                  <Text
                    fontSize="xl"
                    fontWeight="medium"
                    _groupHover={{ color: "violet.400" }}
                  >
                    {question}
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
              <Description>{answer}</Description>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    );
  };
  const ListOfQuestions = () => {
    return (
      <Accordion allowMultiple>
        {data.questions.map((item, i) => (
          <Question key={i} question={item.question} answer={item.answer} />
        ))}
      </Accordion>
    );
  };

  const FAQContainer = ({ children }) => {
    return <MdContainer id="faq">{children}</MdContainer>;
  };

  return (
    <FAQContainer>
      <SectionHeader
        title={data.header.title}
        description={data.header.description}
      />
      <ListOfQuestions />
    </FAQContainer>
  );
}
