import { forwardRef, FormControl, FormLabel, Input } from '@chakra-ui/react';

import { FormHelperTextStyled, TextareaStyled } from './styles';
import { ReadOnlyTextProps, ReadOnlyTextTextAreaProps } from './types';

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
          noOfLines={(props as ReadOnlyTextTextAreaProps).noOfLines}
        />

        <FormHelperTextStyled fontSize={size}>
          {helperText || unForceHelperText ? undefined : '‎'}
        </FormHelperTextStyled>
      </FormControl>
    );
  }
);
