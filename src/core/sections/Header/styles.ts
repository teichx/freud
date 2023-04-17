import { Button, ComponentWithAs, styled } from '@chakra-ui/react';

import { HavingThemeProps } from '~/themes/CustomTheme';

import { HeaderProps } from './types';

export const HeaderButton = styled<ComponentWithAs<'button', HeaderProps>>(
  Button,
  {
    baseStyle: (props) => {
      const { theme, selected } = props as unknown as HavingThemeProps &
        HeaderProps;

      return {
        height: 'auto',
        paddingLeft: theme.space[4],
        paddingRight: theme.space[4],
        paddingTop: theme.space[2],
        paddingBottom: theme.space[2],
        borderRadius: 0,
        backgroundColor: selected
          ? theme.colors.whiteAlpha[300]
          : theme.colors.transparent,
        ':hover': {
          backgroundColor: theme.colors.whiteAlpha[400],
        },
      };
    },
  }
);
