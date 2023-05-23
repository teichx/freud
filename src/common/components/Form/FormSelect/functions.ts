import {
  FormSelectOptionOrValue,
  FormSelectOptionProps,
  FormatFnProps,
  GetSelectOptionsProps,
  ParseFnProps,
} from './types';

const getOnceIfNotMulti = <TItem>(items: TItem[], isMulti?: boolean) =>
  isMulti ? items : items[0];

export const getSelectOptions = ({
  value,
  options,
  isMulti,
}: GetSelectOptionsProps) => {
  const valueArray = Array.isArray(value) ? value : [value];
  const valueRawArray = valueArray
    .map((x) => (typeof x === 'object' ? x.value : x))
    .filter(Boolean);
  const selectedOptions = options.filter((x) =>
    valueRawArray.includes(x.value)
  );

  const result = selectedOptions.map((x) => x.value);
  return getOnceIfNotMulti(result, isMulti);
};

export const formatFormSelect =
  (options: FormSelectOptionProps[]): FormatFnProps =>
  (x) => {
    const result: FormSelectOptionOrValue[] = Array.isArray(x) ? x : [x];
    const values = result
      .map((x) => (typeof x === 'object' ? x.value : x))
      .filter(Boolean);
    const formatted = options.filter((x) => values.includes(x.value));

    return formatted;
  };

export const parseFormSelect =
  (isMulti?: boolean): ParseFnProps =>
  (x) => {
    const result = Array.isArray(x) ? x : [x];
    const values = result
      .map((x) => (typeof x === 'object' ? x.value : x))
      .filter(Boolean);

    return getOnceIfNotMulti(values, isMulti);
  };
