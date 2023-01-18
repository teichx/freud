import { FC } from 'react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, IconButtonProps, useColorMode } from '@chakra-ui/react';

export const ToggleTheme: FC<
  Omit<IconButtonProps, 'onClick' | 'icon' | 'aria-label'>
> = (props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <IconButton
      {...props}
      bg='whiteAlpha.400'
      color='book.desertSun'
      aria-label='Toggle color mode'
      onClick={toggleColorMode}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
    />
  );
};
