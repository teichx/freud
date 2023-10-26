'use client';
import { forwardRef, FormControl, FormLabel, Input } from '@chakra-ui/react';

import { FormHelperText } from '../Form';
import { TextareaStyled } from './styles';
import { ReadOnlyTextProps } from './types';

export const ReadOnlyText = forwardRef<ReadOnlyTextProps, 'div'>(
  (
    { size, label, value, helperText, isTextArea, unForceHelperText, ...props },
    ref
  ) => {
    const InputComponent = isTextArea ? TextareaStyled : Input;

    return (
      <FormControl
        {...props}
        ref={ref}
        as='fieldset'
        size={size}
        isReadOnly
        isDisabled
      >
        <FormLabel as='legend' size={size}>
          {label}
        </FormLabel>

        <InputComponent
          key={value}
          size={size}
          value={value}
          variant='outline'
        />

        <FormHelperText
          meta={undefined}
          unForceHelperText={unForceHelperText}
          helperText={helperText}
        />
      </FormControl>
    );
  }
);
