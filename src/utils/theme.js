import { extendTheme, useMediaQuery } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
  },
  fonts: {
    heading: `"Cabinet Grotesk", sans-serif`,
    body: `"Poppins", sans-serif`,
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  },
  styles: {
    global: (props) => ({
      "html, body": {
        backgroundColor: props.colorMode === "dark" ? "#1D1D1D" : "white",
        fontSize: 16,
      },
      html: {
        scrollBehavior: "smooth",
      },
    }),
  }
});

export default theme;
