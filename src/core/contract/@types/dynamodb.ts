import { Item } from 'dynamoose/dist/Item';

export type DynamoItemProps<T> = T &
  Item & {
    PK: string;
    SK: string;
  };
