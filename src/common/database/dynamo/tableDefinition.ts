export const DefaultTable = {
  tableName: process.env.DYNAMO_TABLE_NAME || '',
  partitionKey: 'PK',
  sortKey: 'SK',
  indexSortKey: 'GSI1SK',
  indexName: 'GSI1',
  indexPartitionKey: 'GSI1PK',
} as const;
