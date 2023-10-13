import type { NextApiRequest, NextApiResponse } from 'next';

import { dynamoDb } from '~/core/api/infra/dynamo';
import { DefaultTable } from '~/core/api/infra/tableDefinition';

export type CreateTableResponse = {
  ok: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreateTableResponse>
) {
  try {
    if (req.headers.authorization !== process.env.ADMIN_AUTH_BASIC) {
      console.log({ status: 'authenticate error' });
      return;
    }

    const tables = await dynamoDb.listTables({
      ExclusiveStartTableName: DefaultTable.tableName?.substring(
        0,
        DefaultTable.tableName.length - 1
      ),
      Limit: 10,
    });
    if (tables.TableNames?.some((x) => x === DefaultTable.tableName)) {
      console.log({ status: 'table already exists' });
      return;
    }

    await dynamoDb.createTable({
      TableName: DefaultTable.tableName,
      ProvisionedThroughput: {
        WriteCapacityUnits: 1,
        ReadCapacityUnits: 1,
      },
      AttributeDefinitions: [
        {
          AttributeName: DefaultTable.partitionKey,
          AttributeType: 'S',
        },
        {
          AttributeName: DefaultTable.sortKey,
          AttributeType: 'S',
        },
        {
          AttributeName: DefaultTable.indexPartitionKey,
          AttributeType: 'S',
        },
        {
          AttributeName: DefaultTable.indexSortKey,
          AttributeType: 'S',
        },
      ],
      KeySchema: [
        {
          AttributeName: DefaultTable.partitionKey,
          KeyType: 'HASH',
        },
        {
          AttributeName: DefaultTable.sortKey,
          KeyType: 'RANGE',
        },
      ],
      GlobalSecondaryIndexes: [
        {
          IndexName: DefaultTable.indexName,
          Projection: {
            ProjectionType: 'ALL',
          },
          ProvisionedThroughput: {
            WriteCapacityUnits: 1,
            ReadCapacityUnits: 1,
          },
          KeySchema: [
            {
              AttributeName: DefaultTable.indexPartitionKey,
              KeyType: 'HASH',
            },
            {
              AttributeName: DefaultTable.indexSortKey,
              KeyType: 'RANGE',
            },
          ],
        },
      ],
    });

    console.log({ status: 'table created' });
  } catch (err) {
    console.log({ status: 'error on created', error: `${err}` });
  } finally {
    res.status(200).send({ ok: true });
  }
}
