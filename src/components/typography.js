import { Heading, Text } from "@chakra-ui/react";

// export function SectionHeader({ title, description }) {
//   return (
//     <VStack spacing={4} mb={16}>
//       <Heading as="h2" textAlign="center">
//         {title}
//       </Heading>
//       <Description textAlign="center">{description}</Description>
//     </VStack>
//   );
// }

export function DyHeading({ children, type, ...props }) {
  const stylesByType = {
    base: {
      as: "h2",
      size: "3xl",
      fontWeight: "bold",
    },
    display: {
      as: "h1",
      size: "4xl",
      fontWeight: "extrabold",
    },
    title: {
      as: "h3",
      size: "2xl",
    },
    subtitle: {
      as: "h4",
      size: "xl",
    },
  };

  const styles = {
    ...stylesByType.base,
    ...(stylesByType[type] || {}),
  };

  return (
    <Heading
      as={styles.as}
      size={styles.size}
      fontWeight={styles.fontWeight}
      {...props}
    >
      {children}
    </Heading>
  );
}

export function DyParagraph({ children, type, ...props }) {
  const stylesByType = {
    base: {
      fontSize: "md",
    },
    description: {
      color: "lavender.700",
    },
    label: {
      fontSize: "sm",
    },
  };

  const styles = {
    ...stylesByType.base,
    ...(stylesByType[type] || {}),
  };

  return (
    <Text fontSize={styles.fontSize} color={styles.color} {...props}>
      {children}
    </Text>
  );
}
