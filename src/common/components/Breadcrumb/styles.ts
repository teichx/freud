import { Breadcrumb, BreadcrumbItem, styled } from '@chakra-ui/react';

import { HavingThemeProps } from '~/common/themes/CustomTheme';

export const BreadcrumbWrapper = styled(Breadcrumb, {
  baseStyle: ({ theme }: HavingThemeProps) => ({
    borderWidth: 1,
    px: theme.space[4],
    height: theme.space[10],
    borderRadius: theme.radii.md,
    '&, ol': {
      display: 'flex',
      alignItems: 'stretch',
    },
    borderColor: theme.semanticTokens.colors['chakra-border-color']._light,
    _dark: {
      borderColor: theme.semanticTokens.colors['chakra-border-color']._dark,
    },
  }),
});

export const BreadcrumbStyledItem = styled(BreadcrumbItem, {
  baseStyle: ({ theme }: HavingThemeProps) => ({
    fontSize: theme.fontSizes.md,
    'a, a span': {
      lineHeight: 1,
      display: 'inline-block',
    },
  }),
});
