import { useCallback, useEffect, useRef, useState } from 'react';

import { Table, Tbody } from '@chakra-ui/react';

import { useDefaultQuery, useQueryPaginate } from '~/common/query';
import { useAuth } from '~/core/services';

import {
  DataTableFooterLoader,
  DataTableHeader,
  DataTableNoData,
  DataTableRows,
  ShowSkeleton,
} from './atom';
import { StyledTableContainer } from './atom/styles';
import {
  DataTableInfiniteScrollProps,
  DataTableInfiniteScrollStateProps,
  TDataId,
} from './types';

const INITIAL_DATA = {
  items: [],
  hasNextPage: true,
};

export function DataTableInfiniteScroll<
  TData extends TDataId = TDataId & Record<string, string>
>({
  url,
  size,
  columns,
  headSize,
  skeletonHeight,
}: DataTableInfiniteScrollProps<TData>) {
  const { limit } = useQueryPaginate();
  const { stringParameters } = useDefaultQuery();
  const references = useRef({
    lastId: '',
    inView: true,
    isLoading: false,
    aborter: new AbortController(),
  });
  const [{ items, hasNextPage }, setState] =
    useState<DataTableInfiniteScrollStateProps<TData>>(INITIAL_DATA);
  const { authenticateFetch } = useAuth();

  const loadNextPage = useCallback(async () => {
    await new Promise((r) => setTimeout(r));
    if (!hasNextPage) return;
    if (!references.current.inView) return;
    if (references.current.isLoading) return;
    references.current.isLoading = true;

    const { lastId } = references.current;
    const urlParams = new URLSearchParams(stringParameters);
    if (lastId) {
      urlParams.set('lastId', lastId);
    }
    const { aborter } = references.current;
    authenticateFetch(`${url}?${urlParams}`, { signal: aborter.signal })
      .then((x) => x.json())
      .then(
        (
          response: Omit<DataTableInfiniteScrollStateProps<TData>, 'isLoading'>
        ) => {
          references.current.lastId = String(
            response.items[response.items.length - 1]?.id || ''
          );

          setState((x) => ({
            ...x,
            items: [...x.items, ...response.items],
            hasNextPage: response.hasNextPage,
          }));
          references.current.isLoading = false;
        }
      )
      .catch(() => {
        references.current.isLoading = false;
      });

    return () => {
      aborter.abort();
    };
  }, [authenticateFetch, url, hasNextPage, stringParameters]);

  useEffect(() => {
    setState(INITIAL_DATA);
    references.current.lastId = '';
    references.current.inView = true;
    references.current.aborter.abort();
    references.current.aborter = new AbortController();
  }, [stringParameters]);

  const HandleLoad = () => {
    setTimeout(loadNextPage);

    return null;
  };

  const isLoaded = INITIAL_DATA.items !== items;
  const showSkeleton = !isLoaded && Number.isInteger(skeletonHeight);

  return (
    <StyledTableContainer>
      <Table variant='simple' colorScheme='book.desertSun' size={size}>
        <DataTableHeader<TData> columns={columns} size={headSize || size} />

        <Tbody>
          <DataTableNoData
            columnsLength={columns.length}
            isVisible={!items.length && isLoaded}
          />

          {showSkeleton ? (
            <ShowSkeleton
              count={limit}
              columnsLength={columns.length}
              skeletonHeight={Number(skeletonHeight)}
            />
          ) : null}

          <DataTableRows<TData>
            isLoading={false}
            columns={columns}
            data={items}
          />
        </Tbody>

        <HandleLoad />
        {hasNextPage && !showSkeleton && (
          <DataTableFooterLoader columnsLength={columns.length} />
        )}
      </Table>
    </StyledTableContainer>
  );
}
