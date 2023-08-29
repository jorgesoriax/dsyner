import { extendTheme, useMediaQuery } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    violet: {
      50: "#efe6fb",
      100: "#d4c2f5",
      200: "#b89aef",
      300: "#9a6fea",
      400: "#824de5",
      500: "#6828df",
      600: "#5d23d9",
      700: "#4b1ad0",
      800: "#3812ca",
      900: "#1001bc",
    },
    altGray: {
      darkerRGBA: "rgba(29, 29, 29, 0.85)",
      darker: "#1d1d1d",
      dark: "#292929",
      light: "#313131",
      lighter: "#545454",
      gradient:
        "linear-gradient(0deg, rgba(29,29,29,1) 0%, rgba(29,29,29,0) 100%)",
    },
    burple: {
      100: "#FAF2FF",
      200: "#E1C1FE",
      300: "#C18EFB",
      400: "#985AF1",
      500: "#6828DE",
      600: "#3D0DB0",
      700: "#210382",
      800: "#0F0054",
      900: "#040026",
    },
    serum: {
      100: "#F8FFF2",
      200: "#DEFEC1",
      300: "#C8FB8E",
      400: "#B3F15A",
      500: "#81B00D",
      600: "#81B00D",
      700: "#648203",
      800: "#455400",
      900: "#222600",
    },
    lavender: {
      100: "#F4F2FF",
      200: "#E3E1FE",
      300: "#C9C9F4",
      400: "#A5A8D8",
      500: "#7278A3",
      600: "#4D5784",
      700: "#354065",
      800: "#232D45",
      900: "#131A26",
    },
  },
  fonts: {
    heading: `"Cabinet Grotesk", sans`,
    body: `"Poppins", sans-serif`,
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      "html, body": {
        // backgroundColor: props.colorMode === "dark" ? "#1D1D1D" : "white",
        fontSize: 16,
      },
    }),
  },
});

export default theme;
