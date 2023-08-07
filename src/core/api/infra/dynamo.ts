import { DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';

export const dynamodbConfig: DynamoDBClientConfig = {
  region: process.env.DYNAMO_AWS_REGION || undefined,
  endpoint: process.env.DYNAMO_AWS_ENDPOINT || undefined,
  credentials: {
    accessKeyId: process.env.DYNAMO_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.DYNAMO_AWS_SECRET_ACCESS_KEY || '',
  },
};
