import {
  flattenObject,
  mountUpdate,
} from '~/common/database/dynamo/mountUpdate';

import { fixtureSchema } from './__fixtures__/schema';

describe('mountUpdate', () => {
  it('flattenObject', () => {
    expect.hasAssertions();
    const result = flattenObject({
      a: {
        b: {
          c: [1, 2, 3],
        },
      },
    });

    expect(result).toStrictEqual({
      'a.b.c': [1, 2, 3],
    });
  });

  it('mountUpdateParams', () => {
    expect.hasAssertions();

    const result = mountUpdate({
      schema: fixtureSchema,
      item: {
        PK: 'pk',
        SK: 1,
        deletedAt: undefined,
        createdAt: '2021-01-01T00:00:00.000Z',
        deep: {
          mostDeep: {
            date: '2022-01-01T00:00:00.000Z',
          },
        },
        select: {
          once: 'a',
        },
        deepSet: {
          stringSet: ['x', 'y'],
          numberSet: [1, 2],
        },
      },
    });

    expect(result).toStrictEqual({
      TableName: '',
      UpdateExpression:
        'SET #PK = :PK, #SK = :SK, #createdAt = :createdAt, #deep.#mostDeep.#date = :deepmostDeepdate, #select.#once = :selectonce, #deepSet.#stringSet = :deepSetstringSet, #deepSet.#numberSet = :deepSetnumberSet REMOVE #deletedAt',
      ExpressionAttributeNames: {
        '#PK': 'PK',
        '#SK': 'SK',
        '#deletedAt': 'deletedAt',
        '#createdAt': 'createdAt',
        '#date': 'date',
        '#deep': 'deep',
        '#mostDeep': 'mostDeep',
        '#select': 'select',
        '#numberSet': 'numberSet',
        '#once': 'once',
        '#deepSet': 'deepSet',
        '#stringSet': 'stringSet',
      },
      ExpressionAttributeValues: {
        ':PK': { S: 'pk' },
        ':SK': { N: 1 },
        ':createdAt': { S: '2021-01-01T00:00:00.000Z' },
        ':deepmostDeepdate': { S: '2022-01-01T00:00:00.000Z' },
        ':selectonce': { S: 'a' },
        ':deepSetnumberSet': {
          NS: [1, 2],
        },
        ':deepSetstringSet': { SS: ['x', 'y'] },
      },
    });
  });
});
