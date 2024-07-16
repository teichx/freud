import { FC, PropsWithChildren } from 'react';

import { Skeleton } from '@chakra-ui/react';

import { useContextLoader } from '~/core/services';

export const SkeletonContextLoader: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading } = useContextLoader();

  return (
    <Skeleton isLoaded={!isLoading} w='100%' speed={3}>
      {children}
    </Skeleton>
  );
};
