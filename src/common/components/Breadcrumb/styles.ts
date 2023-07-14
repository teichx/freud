import { Breadcrumb, BreadcrumbItem, styled } from '@chakra-ui/react';

import { HavingThemeProps } from '~/common/themes/CustomTheme';

export const BreadcrumbWrapper = styled(Breadcrumb, {
  baseStyle: ({ theme }: HavingThemeProps) => ({
    borderWidth: 1,
    px: theme.space[4],
    height: theme.space[10],
    borderRadius: theme.radii.md,
    borderColor: theme.semanticTokens.colors['chakra-border-color'],
    '&, ol': {
      display: 'flex',
      alignItems: 'stretch',
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
