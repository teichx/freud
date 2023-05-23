import { FieldProps, HandlerInput, HandlersResultProps } from './types';

export const handlerProps = <TProps>(
  input: FieldProps<TProps>,
  props: HandlerInput
): HandlersResultProps<TProps> => ({
  onBlur: (event) => {
    if (props.onBlur && event) {
      props.onBlur(event);
    }
    input.onBlur(event);
  },
  onChange: (event) => {
    if (props.onChange) {
      props.onChange(event);
    }
    input.onChange(event);
  },
  onFocus: (event) => {
    if (props.onFocus && event) {
      props.onFocus(event);
    }
    input.onFocus(event);
  },
});
