export const t = (x: string) => x;

export const createI18nClient = jest.fn().mockReturnValue({
  useI18n: () => (x: string) => x,
  useScopedI18n: (x: string) => (y: string) => `${x}.${y}`,
  I18nProviderClient: undefined,
  useChangeLocale: undefined,
  useCurrentLocale: undefined,
});
