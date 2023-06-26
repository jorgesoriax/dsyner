import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import theme from "../utils/theme";

import { GTMnoscript } from "@/utils/GTM";

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <GTMnoscript />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
