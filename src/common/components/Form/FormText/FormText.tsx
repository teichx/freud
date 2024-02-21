import { FC, useCallback, useEffect, useRef } from 'react';

import { FormControl, FormLabel, Input, InputGroup } from '@chakra-ui/react';
import { useField } from 'react-final-form';
import { useIMask, IMask } from 'react-imask';

import { FormHelperText } from '../FormHelperText';
import { handlerProps } from '../handlers';
import { TextareaStyled } from './styles';
import { FormTextProps } from './types';

export const FormText: FC<FormTextProps> = ({
  name,
  size,
  mask = { mask: '' },
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
  const maskRef = useRef(mask.mask ? IMask.createMask(mask) : undefined);
  const isEqual = useCallback(
    (a: string | undefined, b: string | undefined) => {
      if (!maskRef.current) return a === b;

      return (
        maskRef.current.resolve(a || '') === maskRef.current.resolve(b || '')
      );
    },
    []
  );

  const { input, meta } = useField<string | undefined>(name, {
    defaultValue,
    type,
    isEqual,
    ...(fieldProps || {}),
  });
  const InputComponent = isTextArea ? TextareaStyled : Input;

  const { ref, setValue } = useIMask(mask, {
    onAccept: input.onChange,
  });

  useEffect(() => {
    if (!meta.initial) return;

    setValue(meta.initial);
  }, [meta.initial, setValue]);

  useEffect(() => {
    if (!isTextArea) return;
    if (!ref.current) return;

    const { current: input } = ref;
    const autoHeightHandler = () => {
      const oldHeight = input.style.height;
      input.style.height = 'auto';
      input.style.height = oldHeight;
      input.style.height = `${input.scrollHeight}px`;
    };
    input.addEventListener('input', autoHeightHandler, false);
  }, [isTextArea, ref]);

  useEffect(() => {
    if (!isTextArea) return;
    if (!ref.current) return;

    const { current: input } = ref;
    input.style.height = `${input.scrollHeight}px`;
  }, [meta.initial, isTextArea, ref]);

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

      <InputGroup size={size}>
        {InputLeftElement}

        <InputComponent
          {...inputProps}
          {...input}
          {...handlerProps(input, inputProps)}
          ref={ref}
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
