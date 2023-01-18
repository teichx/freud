import { FC } from 'react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  IconButton,
  IconButtonProps,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';

const ptBR = {
  toDark: 'Usar tema escuro',
  toLight: 'Usar tema claro',
} as const;

export const ToggleTheme: FC<
  Omit<IconButtonProps, 'onClick' | 'icon' | 'aria-label'>
> = (props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Tooltip label={isDark ? ptBR.toLight : ptBR.toDark}>
      <IconButton
        {...props}
        bg='whiteAlpha.400'
        color='book.desertSun'
        aria-label='Toggle color mode'
        onClick={toggleColorMode}
        icon={isDark ? <SunIcon /> : <MoonIcon />}
      />
    </Tooltip>
  );
};
