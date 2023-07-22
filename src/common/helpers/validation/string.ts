export const isSequence = (value: (string | number | undefined)[]) =>
  (value || '').every((x) => x === value?.at(0));
