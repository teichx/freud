import { FC, PropsWithChildren } from 'react';

import { CircularProgress } from '@chakra-ui/react';

import { useLoader } from '~/services/Loader';

import {
  ChildrenWrapper,
  SectionLoader,
  SectionText,
  SectionWrapper,
} from './style';
import { SectionProps } from './types';

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  label,
  children,
  disabledLoading,
  ...props
}) => {
  const { isLoading } = useLoader();

  return (
    <SectionWrapper {...props} as='fieldset'>
      {!label ? null : (
        <SectionText as='legend' variant='xl'>
          {label}
        </SectionText>
      )}

      <ChildrenWrapper p='2'>{children}</ChildrenWrapper>

      <SectionLoader isLoading={isLoading && !disabledLoading}>
        <CircularProgress isIndeterminate color='book.desertSun.500' />
      </SectionLoader>
    </SectionWrapper>
  );
};
