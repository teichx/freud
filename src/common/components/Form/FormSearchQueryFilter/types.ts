import { FormTextProps } from '../FormText';

export type FormSearchQueryFilterProps = {
  name: string;
  debounceDelay?: number;
  inputProps?: Omit<FormTextProps['inputProps'], 'onChange'>;
};
