export const objectToUniqueList = (
  value?: Record<string, boolean | undefined>
): string[] =>
  Array.isArray(value)
    ? Array.from(new Set(value))
    : Array.from(
        new Set(
          Object.entries(value || {})
            .filter(([, value]) => !!value)
            .map(([key]) => key)
        )
      );

export const listToObject = (value: Set<string> | string[] | undefined) =>
  Object.fromEntries(Array.from(value || []).map((x) => [x, true]));
