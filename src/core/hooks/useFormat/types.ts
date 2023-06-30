export type useFormatResult = {
  format: (text: string, ...args: unknown[]) => string;
  formatRoute: (text: string, ...args: unknown[]) => string;
};
