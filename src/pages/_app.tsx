import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '~/locale/i18n';
import { persister, ReducerStore } from '~/reducer';
import { CustomTheme } from '~/themes/CustomTheme';

export const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={ReducerStore}>
    <PersistGate loading={null} persistor={persister}>
      <ChakraProvider theme={CustomTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </PersistGate>
  </Provider>
);

export default App;
