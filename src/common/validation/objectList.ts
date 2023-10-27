export const objectToUniqueList = (
  value?: string | Record<string, boolean | undefined>
): string[] => {
  if (!value) return [];
  if (Array.isArray(value)) return Array.from(new Set(value));
  if (typeof value === 'object')
    return Array.from(
      new Set(
        Object.entries(value || {})
          .filter(([, value]) => !!value)
          .map(([key]) => key)
      )
    );

  return [value].filter(Boolean);
};

export const listToObject = (value: Set<string> | string[] | undefined) =>
  Object.fromEntries(Array.from(value || []).map((x) => [x, true]));
