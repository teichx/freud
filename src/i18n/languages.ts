export const languages = {
  'pt-BR': () => import('./pt-BR'),
};

export const languagesKey = Object.keys(
  languages
) as (keyof typeof languages)[];

export const generateStaticParams = async () =>
  languagesKey.map((lang) => ({ lang }));
