import { FC, useEffect, useRef } from 'react';

import { FormControl, FormLabel, Input, InputGroup } from '@chakra-ui/react';
import { useField } from 'react-final-form';

import { FormHelperText } from '../FormHelperText';
import { handlerProps } from '../handlers';
import { TextareaStyled } from './styles';
import { FormTextProps } from './types';

export const FormText: FC<FormTextProps> = ({
  name,
  size,
  label,
  helperText,
  isTextArea,
  inputProps: { defaultValue, type, ...inputProps } = {},
  unForceHelperText,
  fieldProps,
  InputLeftElement,
  InputRightElement,
  ...props
}: FormTextProps) => {
  const { input, meta } = useField<string | undefined>(name, {
    defaultValue,
    type,
    ...(fieldProps || {}),
  });
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const InputComponent = isTextArea ? TextareaStyled : Input;

  useEffect(() => {
    if (!isTextArea) return;
    if (!textAreaRef.current) return;

    const { current: input } = textAreaRef;
    const autoHeightHandler = () => {
      const oldHeight = input.style.height;
      input.style.height = 'auto';
      input.style.height = oldHeight;
      input.style.height = `${input.scrollHeight}px`;
    };
    input.addEventListener('input', autoHeightHandler, false);
  }, [isTextArea]);

  useEffect(() => {
    if (!isTextArea) return;
    if (!textAreaRef.current) return;

    const { current: input } = textAreaRef;
    input.style.height = `${input.scrollHeight}px`;
  }, [meta.initial, isTextArea]);

  return (
    <FormControl
      {...props}
      as='fieldset'
      size={size}
      isInvalid={props.isInvalid || (meta.invalid && meta.touched)}
      isDisabled={props.isDisabled}
    >
      {label && (
        <FormLabel htmlFor={name} as='legend' size={size} w='100%'>
          {label}
        </FormLabel>
      )}

      <InputGroup>
        {InputLeftElement}

        <InputComponent
          {...inputProps}
          {...input}
          {...handlerProps(input, inputProps)}
          ref={textAreaRef}
          value={input.value || ''}
          size={size}
          variant='outline'
        />

        {InputRightElement}
      </InputGroup>

      <FormHelperText
        meta={meta}
        helperText={helperText}
        unForceHelperText={unForceHelperText}
      />
    </FormControl>
  );
};
