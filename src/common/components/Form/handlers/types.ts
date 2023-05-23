import { ChangeEventHandler, FocusEventHandler } from 'react';

import { FieldInputProps } from 'react-final-form';

export type FieldProps<TProps> = FieldInputProps<TProps, HTMLElement>;

export type HandlersResultProps<TProps> = Pick<
  FieldProps<TProps>,
  'onBlur' | 'onChange' | 'onFocus'
>;

export type HandlerInput = {
  onBlur?: FocusEventHandler<HTMLElement>;
  onChange?: ChangeEventHandler<HTMLElement>;
  onFocus?: FocusEventHandler<HTMLElement>;
};
