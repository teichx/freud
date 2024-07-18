import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

import { useScopedI18n } from '~/i18n/client';

import { useSidebarContext } from '../context';

export const ButtonToggleSidebar = () => {
  const { isOpen, onToggle } = useSidebarContext();
  const t = useScopedI18n('components.sidebar');

  return (
    <Button
      size='sm'
      leftIcon={isOpen ? <ChevronLeftIcon /> : undefined}
      rightIcon={isOpen ? undefined : <ChevronRightIcon />}
      onClick={onToggle}
      aria-label='Sidebar aria label'
    >
      {t(isOpen ? 'close' : 'open')}
    </Button>
  );
};
