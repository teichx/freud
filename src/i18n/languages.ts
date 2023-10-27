export const languages = {
  'pt-BR': () => import('./pt-BR'),
};

export const languagesKey = Object.keys(
  languages
) as (keyof typeof languages)[];
