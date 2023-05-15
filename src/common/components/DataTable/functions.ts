import { PageSizeOptionsToSelectProps } from './types';

export const limitOptionsToSelect = ({
  limitOptions,
}: PageSizeOptionsToSelectProps) =>
  limitOptions.map((x) => ({
    label: `${x}`,
    value: x,
  }));
