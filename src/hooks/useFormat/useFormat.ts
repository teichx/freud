import { useFormatResult } from './types';

export const format = (text: string, ...args: string[]) =>
  text.replace(/\{(\d+)\}/g, (_, index) => args[index]);

export const formatRoute = (text: string, ...args: string[]) =>
  text.replace(/\{(\d+)\}/g, (_, index) => encodeURIComponent(args[index]));

export const useFormat = (): useFormatResult => ({
  format,
  formatRoute,
});
