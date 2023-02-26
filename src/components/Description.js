import { Text } from "@chakra-ui/react";

export default function Description({ children, ...props }) {
  return (
    <Text {...props} color="gray">
      {children}
    </Text>
  );
}
