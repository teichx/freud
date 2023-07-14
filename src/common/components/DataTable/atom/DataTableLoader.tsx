import { FC } from 'react';

import { Tr, Td, Box, SkeletonText } from '@chakra-ui/react';

import { useQueryPaginate } from '~/common/query';

import { DataTableLoaderProps } from './types';

export const DataTableLoader: FC<DataTableLoaderProps> = ({
  isLoading,
  fixedHeight,
  dataLength,
  skeletonHeight,
  columnsLength,
}) => {
  const { limit } = useQueryPaginate();
  if (!isLoading) return null;

  const elements = new Array(limit - Math.min(limit, dataLength || 0)).fill(
    undefined
  );

  return (
    <>
      {fixedHeight
        ? elements.map((_, index) => (
            <Tr key={index}>
              <Td textAlign='center' colSpan={columnsLength}>
                <Box h={skeletonHeight} />
              </Td>
            </Tr>
          ))
        : elements.map((_, index) => (
            <Tr key={index}>
              <Td textAlign='center' colSpan={columnsLength}>
                <SkeletonText noOfLines={1} skeletonHeight={skeletonHeight} />
              </Td>
            </Tr>
          ))}
    </>
  );
};
