import { FC } from 'react';

import { Box } from '@chakra-ui/react';

import { expletusSans } from '~/common/fonts';

import { LOGO_TEXT, VARIANTS_WITH_ICON, VARIANTS_WITH_TEXT } from './constants';
import { LogoItem } from './LogoIcon';
import { LogoText, Wrapper } from './styles';
import { LogoProps } from './types';

export const Logo: FC<LogoProps> = ({
  variant = 'full',
  size = 'large',
  ...props
}) => {
  const withIcon = VARIANTS_WITH_ICON.includes(variant);
  const withText = VARIANTS_WITH_TEXT.includes(variant);

  return (
    <Wrapper {...props}>
      <Box display='flex' justifyContent='start' alignItems='center'>
        <Box mr={withText ? 2 : 0}>{withIcon && <LogoItem size={size} />}</Box>

        {withText && (
          <LogoText
            size={size}
            variant={variant}
            className={expletusSans.className}
          >
            {LOGO_TEXT.logo}
          </LogoText>
        )}
      </Box>
    </Wrapper>
  );
};
