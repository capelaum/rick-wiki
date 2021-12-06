import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "../styles/globals.scss";

import theme from "../styles/theme";
const myTheme = extendTheme(theme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
