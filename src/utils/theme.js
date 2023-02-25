import { extendTheme, useMediaQuery } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#efe6fb",
      100: "#d4c2f5",
      200: "#b89aef",
      300: "#9a6fea",
      400: "#824de5",
      500: "#6828df",
      600: "#5d23d9",
      700: "#4b1ad0",
      800: "#3812ca",
      900: "#1001bc"
    }
  },
  fonts: {
    heading: `"Cabinet Grotesk", sans`,
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
      }
    }),
  }
});

export default theme;
