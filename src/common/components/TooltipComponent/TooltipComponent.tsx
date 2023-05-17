import { FC } from 'react';

import { StyledTooltipComponent } from './styles';
import { TooltipComponentProps } from './types';

export const TooltipComponent: FC<TooltipComponentProps> = ({
  children,
  ...props
}) => (
  <StyledTooltipComponent hasArrow {...props}>
    {children}
  </StyledTooltipComponent>
);
