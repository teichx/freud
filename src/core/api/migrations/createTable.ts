import { dynamoDb } from '../infra/dynamo';
import { DefaultTable } from '../infra/tableDefinition';

export const createTable = async () => {
  try {
    const tables = await dynamoDb.listTables({
      ExclusiveStartTableName: DefaultTable.tableName?.substring(
        0,
        DefaultTable.tableName.length - 1
      ),
      Limit: 10,
    });
    if (tables.TableNames?.some((x) => x === DefaultTable.tableName)) {
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
  } catch (error) {
    console.log('Error on create dynamo table', { error: `${error}` });
  }
};
