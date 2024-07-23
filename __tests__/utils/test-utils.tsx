jest.mock<typeof import('~/common/reducer/ReduxProvider')>(
  '~/common/reducer/ReduxProvider',
  jest.fn()
);
import { FC, Fragment, PropsWithChildren, ReactElement } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { configureStore } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';
const { Provider } = jest.requireActual('react-redux');

import { rootReducer } from '~/common/reducer/rootReducer';
import { CustomTheme } from '~/common/themes/CustomTheme';

const store = configureStore({
  reducer: rootReducer,
});

const DefaultProviders: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>
    <ChakraProvider theme={CustomTheme}>{children}</ChakraProvider>
  </Provider>
);

export type AllOptions = RenderOptions & {
  wrapper?: FC<PropsWithChildren>;
  hocWrapper?: FC<PropsWithChildren>;
};

const customRender = (element: ReactElement, options?: AllOptions) => {
  const Wrapper = options?.wrapper || Fragment;
  const HocWrapper = options?.hocWrapper || DefaultProviders;

  return render(element, {
    wrapper: ({ children }) => (
      <HocWrapper>
        <Wrapper>{children}</Wrapper>
      </HocWrapper>
    ),
    ...options,
  });
};

export * from '@testing-library/react';

export { customRender as render };
