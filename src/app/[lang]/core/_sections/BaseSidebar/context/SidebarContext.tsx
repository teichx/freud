import { PropsWithChildren, createContext, useContext } from 'react';

import { useDisclosure } from '@chakra-ui/react';

const context = createContext<ReturnType<typeof useDisclosure> | null>(null);

export const useSidebarContext = () => {
  const value = useContext(context);
  if (!value) throw new Error('Cannot use out of context');

  return value;
};

export const SidebarContext = ({ children }: PropsWithChildren) => {
  const disclosure = useDisclosure({ defaultIsOpen: true });

  return <context.Provider value={disclosure}>{children}</context.Provider>;
};
