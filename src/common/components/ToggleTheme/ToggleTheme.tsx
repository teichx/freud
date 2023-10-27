import { FC } from 'react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  IconButton,
  IconButtonProps,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import { useScopedI18n } from '~/i18n/client';

export const ToggleTheme: FC<
  Omit<IconButtonProps, 'onClick' | 'icon' | 'aria-label'>
> = (props) => {
  const t = useScopedI18n('components.toggleTheme');

  const { toggleColorMode, colorMode } = useColorMode();
  const IconTheme = useColorModeValue(SunIcon, MoonIcon);

  return (
    <Tooltip label={t('label', { appearance: t(colorMode) })}>
      <IconButton
        {...props}
        bg='whiteAlpha.400'
        color='book.desertSun.100'
        aria-label='Toggle color mode'
        onClick={toggleColorMode}
        icon={<IconTheme />}
      />
    </Tooltip>
  );
};
