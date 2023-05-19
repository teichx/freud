import { ReactNode } from 'react';

import { Config } from 'final-form';
import { FormProps, FormRenderProps, RenderableProps } from 'react-final-form';

export type FormComponentProps<
  FormValues = Record<string, unknown>,
  InitialFormValues = Partial<FormValues>
> = Config<FormValues, InitialFormValues> &
  RenderableProps<FormRenderProps<FormValues, InitialFormValues>> &
  Pick<
    FormProps<FormValues, InitialFormValues>,
    'subscription' | 'decorators' | 'form' | 'initialValuesEqual'
  > & {
    children: ReactNode;
  };
