import { FC, Suspense } from 'react';

import { Tooltip } from '@chakra-ui/react';

import { TooltipComponentProps } from './types';

export const TooltipComponent: FC<TooltipComponentProps> = ({
  children,
  ...props
}) => (
  <Suspense>
    <Tooltip
      sx={{
        borderWidth: '1px',
        paddingTop: '1',
        paddingLeft: '3',
        paddingRight: '3',
        borderRadius: 'md',
        paddingBottom: '1',
        fontWeight: 'semibold',
        ...props.sx,
      }}
      hasArrow
      {...props}
    >
      {children}
    </Tooltip>
  </Suspense>
);
