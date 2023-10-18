import { Chunk, UseHighlightProps } from './types';

const escapeRegexp = (term: string): string =>
  term.replace(/[|\\{}()[\]^$+*?.-]/g, (char: string) => `\\${char}`);

const buildRegex = (query: string[]) => {
  const _query = query
    .filter((text) => text.length !== 0)
    .map((text) => escapeRegexp(text.trim()));
  if (!_query.length) {
    return null;
  }

  return new RegExp(`(${_query.join('|')})`, 'ig');
};

const defaultTransform = (value: string) => value;

const highlightWords = ({
  text,
  query,
  transformFunction,
}: UseHighlightProps): Chunk[] => {
  const regex = buildRegex(Array.isArray(query) ? query : [query]);
  if (!regex) {
    return [{ text, match: false }];
  }

  const transformedText = transformFunction || defaultTransform;
  const result = transformedText(text).split(regex).filter(Boolean);

  let startIndex = 0;
  return result.map((str) => {
    const match = regex.test(transformedText(str));
    const replacedText = text.substring(startIndex, startIndex + str.length);
    startIndex += str.length;

    return {
      text: replacedText,
      match,
    };
  });
};

export const useTextHighlight = ({
  text,
  query,
  transformFunction,
}: UseHighlightProps): Chunk[] =>
  highlightWords({ text, query, transformFunction });
