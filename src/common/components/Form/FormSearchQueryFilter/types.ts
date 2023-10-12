import { FormTextProps } from '../FormText';

export type FormSearchQueryFilterProps = Omit<
  FormTextProps,
  'name' | 'inputProps'
> & {
  name: string;
  debounceDelay?: number;
  inputProps?: Omit<FormTextProps['inputProps'], 'onChange'>;
};
