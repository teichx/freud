import { aws } from 'dynamoose';

const ddb = new aws.ddb.DynamoDB({
  region: process.env.DYNAMO_AWS_REGION || undefined,
  endpoint: process.env.DYNAMO_AWS_ENDPOINT || undefined,
  credentials: {
    accessKeyId: process.env.DYNAMO_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.DYNAMO_AWS_SECRET_ACCESS_KEY || '',
  },
});

aws.ddb.set(ddb);
