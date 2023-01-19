export type useFormatResult = {
  format: (text: string, ...args: string[]) => string;
  formatRoute: (text: string, ...args: string[]) => string;
};
