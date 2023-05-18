import { GetSelectOptionsProps } from './types';

export const getSelectOptions = ({ value, options }: GetSelectOptionsProps) => {
  const valueArray = Array.isArray(value) ? value : [value];
  const valueRawArray = valueArray
    .map((x) => (typeof x === 'object' ? x.value : x))
    .filter(Boolean);
  const selectedOptions = options.filter((x) =>
    valueRawArray.includes(x.value)
  );

  return selectedOptions;
};
