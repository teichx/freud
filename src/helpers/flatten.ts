export const flattenObject = <T = Record<string, unknown>>(
  obj: Record<string, unknown | Record<string, unknown>>,
  prefix = ''
): T =>
  Object.keys(obj).reduce<Record<string, unknown>>((acc, key) => {
    const pre = prefix.length ? prefix + '.' : '';
    const currentValue = obj[key] as unknown as Record<string, unknown>;

    return Object.assign(
      acc,
      typeof currentValue === 'object' && currentValue !== null
        ? flattenObject(currentValue, pre + key)
        : { [pre + key]: currentValue }
    );
  }, {}) as T;

export const expandObject = <T = Record<string, unknown>>(
  obj: Record<string, unknown>
) => {
  const result: Record<string, unknown> = {};
  Object.keys(obj).forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) return;

    key
      .split('.')
      .reduce(
        (acc, currentKey, index, keysList) =>
          (acc[currentKey] ||
            (acc[currentKey] = Number.isNaN(Number(keysList[index + 1]))
              ? keysList.length - 1 === index
                ? obj[key]
                : {}
              : [])) as Record<string, unknown>,
        result
      );
  }, {});
  return result as T;
};
