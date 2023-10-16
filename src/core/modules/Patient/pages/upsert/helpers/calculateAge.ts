import { parseISO, differenceInYears } from 'date-fns';

export const calculateAge = (value?: string | Date) => {
  try {
    if (!value) return undefined;
    const date = value instanceof Date ? value : parseISO(value);
    const yearReceived = date.getFullYear();

    const now = new Date();
    const CURRENT_YEAR = now.getFullYear();
    const MIN_YEAR = 1900;
    if (yearReceived < MIN_YEAR) return;
    if (yearReceived > CURRENT_YEAR) return;

    const formatted = differenceInYears(now, date);
    if (Number.isNaN(formatted)) return undefined;

    return formatted;
  } catch {
    return undefined;
  }
};
