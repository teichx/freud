import { FC } from 'react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  IconButton,
  IconButtonProps,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

export const ToggleTheme: FC<
  Omit<IconButtonProps, 'onClick' | 'icon' | 'aria-label'>
> = (props) => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'components.toggle_theme.label',
  });
  const { toggleColorMode, colorMode } = useColorMode();
  const IconTheme = useColorModeValue(SunIcon, MoonIcon);

  return (
    <Tooltip label={t(`.${colorMode}`)}>
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
