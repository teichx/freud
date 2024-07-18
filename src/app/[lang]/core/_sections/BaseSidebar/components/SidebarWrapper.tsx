import { ComponentProps, FC, PropsWithChildren } from 'react';

import { Flex, FlexProps } from '@chakra-ui/react';

import { SidebarContext } from '../context';

const SidebarWrapperInternal = ({
  children,
  Sidebar,
  ...props
}: PropsWithChildren<{ Sidebar: FC } & FlexProps>) => (
  <Flex mx='4' grow={1} overflow='hidden' {...props}>
    <Sidebar />

    {children}
  </Flex>
);

export const SidebarWrapper = (
  props: ComponentProps<typeof SidebarWrapperInternal>
) => (
  <SidebarContext>
    <SidebarWrapperInternal {...props} />
  </SidebarContext>
);
