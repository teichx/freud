import { FC } from 'react';

import { parseISO, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { TooltipComponent } from '../TooltipComponent';
import { TooltipDateProps } from './types';

export const TooltipDate: FC<TooltipDateProps> = ({
  date,
  children,
  ...props
}) => (
  <TooltipComponent
    {...props}
    label={
      date ? formatDistanceToNow(parseISO(date), { locale: ptBR }) : undefined
    }
  >
    {children}
  </TooltipComponent>
);
