import { Badge } from '@chakra-ui/react';

import { useScopedI18n } from '~/i18n/client';

export type BadgeVerifiedProps = {
  verified: boolean | undefined;
  visible: boolean;
};

export const BadgeVerified = ({ verified, visible }: BadgeVerifiedProps) => {
  const t = useScopedI18n('translations.pages.profile.badge.verified');

  return visible ? (
    <Badge colorScheme={verified ? 'green' : 'orange'}>
      {t(`${verified || false}`)}
    </Badge>
  ) : null;
};
