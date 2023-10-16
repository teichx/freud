import slugify from 'slugify';

export const parseSearchTerm = (values: string[]) =>
  values
    .map((x) =>
      slugify(x, {
        replacement: '-',
        lower: true,
        trim: true,
      })
    )
    .join('_');
