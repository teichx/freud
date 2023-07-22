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
