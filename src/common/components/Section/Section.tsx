import { FC, PropsWithChildren } from 'react';

import { useLoader } from '~/core/services';

import { Loader } from '../Loader/Loader';
import { ChildrenWrapper, SectionText, SectionWrapper } from './style';
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

      <Loader isLoading={isLoading && !disabledLoading} />
    </SectionWrapper>
  );
};
