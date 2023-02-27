import { Text } from "@chakra-ui/react";

export default function Description({ children, ...props }) {
  return (
    <Text color="gray" {...props}>
      {children}
    </Text>
  );
}
