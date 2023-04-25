export const flattenObject = (
  obj: Record<string, unknown | Record<string, unknown>>,
  prefix = ''
): Record<string, unknown> =>
  Object.keys(obj).reduce<Record<string, unknown>>((acc, key) => {
    const pre = prefix.length ? prefix + '.' : '';
    const currentValue = obj[key] as unknown as Record<string, unknown>;

    return Object.assign(
      acc,
      typeof currentValue === 'object' && currentValue !== null
        ? flattenObject(currentValue, pre + key)
        : { [pre + key]: currentValue }
    );
  }, {});

export const expandObject = (obj: Record<string, unknown>) =>
  Object.entries(obj).reduce(
    (acc, [key, value]) =>
      Object.assign(
        acc,
        key
          .split('.')
          .reverse()
          .reduce((nestedValue, part) => ({ [part]: nestedValue }), value)
      ),
    {}
  );
