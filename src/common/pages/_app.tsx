import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { getReducerStore } from '~/common/reducer';
import { CustomTheme } from '~/common/themes/CustomTheme';

import '~/common/locale/i18n';

const store = getReducerStore();

export const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={CustomTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  </Provider>
);

export default App;
