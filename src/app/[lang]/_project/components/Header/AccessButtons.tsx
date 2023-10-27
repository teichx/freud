'use client';
import { Flex, ButtonGroup, Hide, SkeletonText } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { Buttons } from '~/common/components/Buttons';

import { isMobileSize } from './constants';

export const AccessButtons = () => {
  const { status } = useSession();

  return (
    <Hide below={isMobileSize}>
      <Flex alignItems='center'>
        {status === 'loading' && (
          <Flex columnGap='2' justifyContent='flex-end'>
            <SkeletonText w='270px' skeletonHeight='8' noOfLines={1} />
            <SkeletonText w='103px' skeletonHeight='8' noOfLines={1} />
          </Flex>
        )}
        {status === 'unauthenticated' && <Buttons.Login />}
        {status === 'authenticated' && (
          <ButtonGroup size='sm' justifyContent='flex-end'>
            <Buttons.Access />
            <Buttons.Logout w='103px' />
          </ButtonGroup>
        )}
      </Flex>
    </Hide>
  );
};
