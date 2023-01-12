import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from 'context/Auth';
import type { AppProps } from 'next/app';

export const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  </ChakraProvider>
);

export default App;
