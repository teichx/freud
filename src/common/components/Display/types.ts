import { PropsWithChildren } from 'react';

import { ThemeProps } from '~/common/themes';

export type StaticDisplayProps = PropsWithChildren<{
  size?: keyof ThemeProps['breakpoints'];
}>;
