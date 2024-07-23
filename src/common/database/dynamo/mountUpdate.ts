import {
  UpdateItemCommandInput,
  AttributeValue,
} from '@aws-sdk/client-dynamodb';

import { DefaultTable } from './tableDefinition';

export type DeepKeys<T, P extends string = ''> = {
  [K in keyof T]: T[K] extends object
    ? `${P extends '' ? '' : `${P}.`}${K & string}.${DeepKeys<T[K], ''>}`
    : `${P extends '' ? '' : `${P}.`}${K & string}`;
}[keyof T];

const flattenObjectInternal = <T extends object>(
  item: T,
  parentKey = '',
  result = {}
) =>
  Object.entries(item).reduce((acc, [key, value]) => {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      flattenObjectInternal(value, newKey, acc);
      return acc;
    }

    Object.assign(acc, { [newKey]: value });
    return acc;
  }, result);

export const flattenObject = <T extends object>(item: T) =>
  flattenObjectInternal(item, '', {}) as DeepKeys<T>;

type InitialState = {
  removeExpression: string[];
  setExpression: string[];
  names: Record<string, string>;
  values: Record<string, AttributeValue>;
};

export const mountUpdate = ({
  schema,
  item,
}: {
  schema: { getAttributeType: (key: string) => string | string[] };
  item: object;
}): Omit<UpdateItemCommandInput, 'Key'> => {
  const { setExpression, removeExpression, names, values } = Object.entries(
    flattenObject(item)
  ).reduce<InitialState>(
    (acc, [fullKey, value]) => {
      const keyAttributes = fullKey.split('.');

      const toKey = `:${keyAttributes.join('')}`;
      keyAttributes.forEach((key) => {
        Object.assign(acc.names, { [`#${key}`]: key });
      });

      if (value === null || value === undefined) {
        const keyToRemove = keyAttributes.map((x) => `#${x}`).join('.');
        acc.removeExpression.push(`REMOVE ${keyToRemove}`);
        return acc;
      }

      const attributeType = schema.getAttributeType(fullKey).toString();
      Object.assign(acc.values, {
        [toKey]: {
          [attributeType]: value,
        },
      });
      const keysToUpdate = keyAttributes.map((x) => `#${x}`).join('.');
      acc.setExpression.push(`${keysToUpdate} = ${toKey}`);

      return acc;
    },
    {
      removeExpression: [],
      setExpression: [],
      names: {},
      values: {},
    }
  );

  return {
    TableName: DefaultTable.tableName,
    UpdateExpression: [
      `SET ${setExpression.join(', ')}`,
      ...removeExpression,
    ].join(' '),
    ExpressionAttributeNames: names,
    ExpressionAttributeValues: values,
  };
};
