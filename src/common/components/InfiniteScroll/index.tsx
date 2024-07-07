import { useCallback, useEffect, useRef, useState } from 'react';

import { Box, VStack, Spinner } from '@chakra-ui/react';
import { useInView, motion } from 'framer-motion';
import { ImSpinner2 } from 'react-icons/im';

import { useAuth } from '~/core/services';
import { useScopedI18n } from '~/i18n/client';

import {
  InfiniteScrollProps,
  InfiniteScrollRequestProps,
  InfiniteScrollStateProps,
} from './types';

export function InfiniteScroll<TItem extends { id: string }>({
  url,
  RenderItem,
  wrapperProps,
}: InfiniteScrollProps<TItem>) {
  const t = useScopedI18n('components.infiniteScroll');
  const references = useRef({
    lastId: '',
    isLoading: false,
  });
  const [{ items, hasNextPage }, setState] = useState<
    InfiniteScrollStateProps<TItem>
  >({
    items: [],
    hasNextPage: true,
  });
  const { authenticateFetch } = useAuth();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);

  const loadNextPage = useCallback(() => {
    if (!hasNextPage) return;
    if (references.current.isLoading) return;

    references.current.isLoading = true;

    const { lastId } = references.current;
    const [pureUrl, params] = url.split('?');
    const urlParams = new URLSearchParams(params);
    if (lastId) {
      urlParams.set('lastId', lastId);
    }
    authenticateFetch(`${pureUrl}?${urlParams}`)
      .then((x) => x.json())
      .then((response: InfiniteScrollRequestProps<TItem>) => {
        references.current.lastId =
          response.items[response.items.length - 1].id;

        setState((x) => ({
          ...x,
          items: [...x.items, ...response.items],
          hasNextPage: response.hasNextPage,
        }));
        references.current.isLoading = false;
      })
      .catch(() => {
        references.current.isLoading = false;
      });
  }, [authenticateFetch, url, hasNextPage]);

  useEffect(() => {
    if (!isInView) return;
    loadNextPage();
  }, [loadNextPage, isInView]);

  return (
    <Box
      flexGrow={1}
      width='100%'
      display='flex'
      alignItems='center'
      flexDirection='column'
    >
      <VStack w='100%' {...wrapperProps}>
        {items.map((x) => (
          <RenderItem key={x.id} {...x} />
        ))}
      </VStack>

      <motion.div ref={containerRef}>
        <Box pt='10' />
        <Box m='5' h='48px'>
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }}>
            {hasNextPage ? (
              <Spinner as={ImSpinner2} size='lg' speed='0.75s' thickness='0' />
            ) : (
              t('endOfList')
            )}
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
}
