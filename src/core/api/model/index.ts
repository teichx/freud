import { aws } from 'dynamoose';

import { dynamodbConfig } from '../infra/dynamo';

const ddb = new aws.ddb.DynamoDB(dynamodbConfig);

aws.ddb.set(ddb);

export * from './patient';
export * from './caseReport';
