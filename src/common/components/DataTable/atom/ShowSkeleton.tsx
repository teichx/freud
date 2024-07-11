import { SkeletonText, Td, Tr } from '@chakra-ui/react';

import { ShowSkeletonProps } from './types';

export const ShowSkeleton = ({
  count,
  columnsLength,
  skeletonHeight,
}: ShowSkeletonProps) => (
  <>
    {new Array(count).fill(undefined).map((_, index) => (
      <Tr key={`loading-${index}`}>
        <Td textAlign='center' colSpan={columnsLength}>
          <SkeletonText noOfLines={1} skeletonHeight={`${skeletonHeight}px`} />
        </Td>
      </Tr>
    ))}
  </>
);
