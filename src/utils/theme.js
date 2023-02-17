import { extendTheme, useMediaQuery } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
  },
  fonts: {
    heading: `"Poppins", sans-serif`,
    body: `"Inter", sans-serif`,
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      "html, body": {
        // color: props.colorMode === "dark" ? "white" : "gray.00",
        fontSize: 16,
      },
      html: {
        scrollBehavior: "smooth",
      },
    }),
  }
});

export default theme;
