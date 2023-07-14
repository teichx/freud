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
    fontWeight: theme.fontWeights.semibold,
    color: theme.semanticTokens.colors['chakra-body-text'],
    backgroundColor: theme.semanticTokens.colors['chakra-body-bg'],
    borderColor: theme.semanticTokens.colors['chakra-border-color'],
  }),
});
