import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from 'context/Auth';
import type { AppProps } from 'next/app';
import { CustomTheme } from 'themes/CustomTheme';

export const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={CustomTheme}>
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  </ChakraProvider>
);

export default App;
