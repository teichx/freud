import { UseFieldConfig } from 'react-final-form';

import {
  FormSelectOptionOrValue,
  FormSelectOptionProps,
  GetSelectOptionsProps,
} from './types';

export const getSelectOptions = ({ value, options }: GetSelectOptionsProps) => {
  const valueArray = Array.isArray(value) ? value : [value];
  const valueRawArray = valueArray
    .map((x) => (typeof x === 'object' ? x.value : x))
    .filter(Boolean);
  const selectedOptions = options.filter((x) =>
    valueRawArray.includes(x.value)
  );

  const result = selectedOptions.map((x) => x.value);
  // console.log({ result });
  return result;
};

export const formatFormSelect =
  (
    options: FormSelectOptionProps[]
  ): UseFieldConfig<(string | number)[], FormSelectOptionProps[]>['format'] =>
  (x) => {
    const result: FormSelectOptionOrValue[] = Array.isArray(x) ? x : [x];
    const values = result
      .map((x) => (typeof x === 'object' ? x.value : x))
      .filter(Boolean);
    const formatted = options.filter((x) => values.includes(x.value));

    // console.log({ formatted });
    return formatted;
  };

export const parseFormSelect: UseFieldConfig<
  (string | number)[],
  FormSelectOptionProps[]
>['parse'] = (x) => {
  const result = Array.isArray(x) ? x : [x];
  const values = result
    .map((x) => (typeof x === 'object' ? x.value : x))
    .filter(Boolean);

  // console.log({ values });
  return values;
};
