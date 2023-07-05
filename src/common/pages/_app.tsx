import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { initMessageListener } from 'redux-state-sync';

import { getReducerStore } from '~/common/reducer';
import { CustomTheme } from '~/common/themes/CustomTheme';

import '~/common/locale/i18n';

const store = getReducerStore();
const persister = persistStore(store);

initMessageListener(store);

export const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <ChakraProvider theme={CustomTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </PersistGate>
  </Provider>
);

export default App;
