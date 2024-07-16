'use client';
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

import { useAppSelector } from '~/common/reducer';

import { LoaderType } from './types';

const Context = createContext<ContextLoaderProps['loaders']>([]);

export type ContextLoaderProps = {
  loaders: LoaderType[];
};

export const ContextLoader: FC<PropsWithChildren<ContextLoaderProps>> = ({
  children,
  loaders,
}) => {
  const [stateLoader] = useState(loaders);

  return <Context.Provider value={stateLoader}>{children}</Context.Provider>;
};

export const useContextLoader = () => {
  const loadersFromContext = useContext(Context);
  const isLoading = useAppSelector((x) =>
    loadersFromContext.some((key) => x.loader[key]?.isLoading)
  );

  return {
    isLoading,
  };
};
