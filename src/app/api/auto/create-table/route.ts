import { NextRequest, NextResponse } from 'next/server';

import { dynamoDb } from '~/common/database/dynamo';
import { DefaultTable } from '~/common/database/dynamo/tableDefinition';

export type CreateTableResponse = {
  ok: boolean;
};

const result = NextResponse.json({ ok: true });

export async function GET(req: NextRequest) {
  try {
    if (req.headers.get('authorization') !== process.env.ADMIN_AUTH_BASIC) {
      console.log({ status: 'authenticate error' });
      return result;
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
      return result;
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
  }
  return result;
}
