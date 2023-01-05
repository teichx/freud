import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

export default ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);
