import { ObjectType } from 'dynamoose/dist/General';
import { Query } from 'dynamoose/dist/ItemRetriever';

export type DynamoPaginatorProps<TResult> = {
  offset: number;
  limit: number;
  queryLimit?: number;
  query: Query<TResult>;
};

export const dynamoPaginator = async <TResult>({
  offset,
  limit,
  query,
  queryLimit = 100,
}: DynamoPaginatorProps<TResult>): Promise<TResult[]> => {
  const allItems: TResult[] = [];

  const lastItemPosition = offset + limit;
  let lastKey: ObjectType | undefined;
  let itemsFetched = 0;
  do {
    const items = await (lastKey ? query.startAt(lastKey) : query)
      .limit(queryLimit)
      .exec();

    itemsFetched += items.length;
    lastKey = items.lastKey;
    allItems.push(...items);
  } while (typeof lastKey !== 'undefined' && itemsFetched < lastItemPosition);

  return allItems.slice(offset, offset + limit);
};
