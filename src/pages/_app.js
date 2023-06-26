import "@fontsource/poppins";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/utils/theme";
import Fonts from "@/utils/fonts";

import { GTMscript } from "@/utils/GTM";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
      <GTMscript />
    </ChakraProvider>
  );
}
