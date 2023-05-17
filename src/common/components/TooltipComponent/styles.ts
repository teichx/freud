import { Tooltip, styled } from '@chakra-ui/react';

import { HavingThemeProps } from '~/common/themes/CustomTheme';

export const StyledTooltipComponent = styled(Tooltip, {
  baseStyle: ({ theme }: HavingThemeProps) => ({
    borderWidth: theme.borders['1px'],
    paddingTop: theme.space[1],
    paddingLeft: theme.space[3],
    paddingRight: theme.space[3],
    borderRadius: theme.radii.md,
    paddingBottom: theme.space[1],
    color: theme.colors.book.darkBlue[500],
    fontWeight: theme.fontWeights.semibold,
    backgroundColor: theme.colors.gray[300],
    borderColor: theme.colors.book.darkBlue[500],
  }),
});
