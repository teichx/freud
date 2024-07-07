import { useCallback, useEffect, useRef, useState } from 'react';

import { Box, VStack, Spinner } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ImSpinner2 } from 'react-icons/im';

import { useDefaultQuery } from '~/common/query';
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
  bottomDistance,
}: InfiniteScrollProps<TItem>) {
  const { stringParameters } = useDefaultQuery();
  const t = useScopedI18n('components.infiniteScroll');
  const references = useRef({
    lastId: '',
    inView: true,
    isLoading: false,
  });
  const [{ items, hasNextPage }, setState] = useState<
    InfiniteScrollStateProps<TItem>
  >({
    items: [],
    hasNextPage: true,
  });
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
    authenticateFetch(`${url}?${urlParams}`)
      .then((x) => x.json())
      .then((response: InfiniteScrollRequestProps<TItem>) => {
        references.current.lastId =
          response.items[response.items.length - 1]?.id || '';

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
  }, [authenticateFetch, url, stringParameters, hasNextPage]);

  useEffect(() => {
    setState({
      items: [],
      hasNextPage: true,
    });
    references.current.lastId = '';
    references.current.inView = true;
  }, [stringParameters]);

  const HandleLoad = () => {
    setTimeout(loadNextPage);

    return null;
  };

  return (
    <Box
      flexGrow={1}
      width='100%'
      display='flex'
      alignItems='center'
      flexDirection='column'
      position='relative'
    >
      <VStack w='100%'>
        {items.map((x) => (
          <RenderItem key={x.id} {...x} />
        ))}
      </VStack>

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

      <Box
        h='1px'
        w='1px'
        bottom={`${bottomDistance || 200}px`}
        position='absolute'
      >
        <motion.div
          onViewportEnter={() => {
            references.current.inView = true;
            loadNextPage();
          }}
          onViewportLeave={() => {
            references.current.inView = false;
          }}
        />
      </Box>

      <HandleLoad />
    </Box>
  );
}
