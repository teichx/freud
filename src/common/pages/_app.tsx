import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { getReducerStore } from '~/common/reducer';
import { CustomTheme } from '~/common/themes/CustomTheme';
import { useSoftRefresh } from '~/core/services';

import '~/common/locale/i18n';

const store = getReducerStore();

const SoftRefresh = ({ Component, pageProps }: AppProps) => {
  const { id } = useSoftRefresh();

  return <Component key={id} {...pageProps} />;
};

export const App = (props: AppProps) => (
  <Provider store={store}>
    <SessionProvider session={props.pageProps.session}>
      <ChakraProvider theme={CustomTheme}>
        <SoftRefresh {...props} />
      </ChakraProvider>
    </SessionProvider>
  </Provider>
);

export default App;
