import { FC, PropsWithChildren } from 'react';

import { ChildrenWrapper, SectionText, SectionWrapper } from './style';
import { SectionProps } from './types';

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  label,
  ...props
}) => (
  <SectionWrapper {...props} as='fieldset'>
    {!label ? null : (
      <SectionText as='legend' variant='xl'>
        {label}
      </SectionText>
    )}

    <ChildrenWrapper p='2'>{children}</ChildrenWrapper>
  </SectionWrapper>
);
