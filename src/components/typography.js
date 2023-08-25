import { Heading, VStack } from "@chakra-ui/react";
import Description from "./Description";

export function SectionHeader({ title, description }) {
  return (
    <VStack spacing={4} mb={16}>
      <Heading as="h2" textAlign="center">
        {title}
      </Heading>
      <Description textAlign="center">{description}</Description>
    </VStack>
  );
}
export function Display({children, ...props}) {
    return (
        <Heading
          as="h1"
          size="4xl"
          lineHeight="none"
          fontWeight="bold"
          mb={8}
          textAlign={{ base: "center", md: "left" }}
          {...props}
        >
          {children}
        </Heading>
    )
}
// export function Header() {
//     return (

//     )
// }
// export function Title() {
//     return (

//     )
// }
// export function Subtitle() {
//     return (

//     )
// }
// export function Text() {
//     return (

//     )
// }
// export function Label() {
//     return (

//     )
// }