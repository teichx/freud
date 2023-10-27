import { DynamoDB, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { aws } from 'dynamoose';

export const dynamodbConfig: DynamoDBClientConfig = {
  region: process.env.DYNAMO_AWS_REGION || undefined,
  endpoint: process.env.DYNAMO_AWS_ENDPOINT || undefined,
  credentials: {
    accessKeyId: process.env.DYNAMO_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.DYNAMO_AWS_SECRET_ACCESS_KEY || '',
  },
};

export const dynamoDb = new DynamoDB(dynamodbConfig);
aws.ddb.set(dynamoDb);

export const dynamodbClient = DynamoDBDocument.from(dynamoDb, {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
});

export { model } from 'dynamoose';
