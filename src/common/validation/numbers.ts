export const numbersOnly = (value: string | undefined) =>
  `${value || ''}`.replace(/\D/g, '');
