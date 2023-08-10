import { useState } from 'react';

import {
  Button,
  Popover,
  PopoverAnchor,
  useDisclosure,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { Avatar } from '~/common/components/Avatar';

import { Content } from './components/Content';
import { HeaderDetailsContent } from './types';

const IMAGE_SIZE = 40;

export const HeaderDetails = () => {
  const [contentKind, setContentKind] =
    useState<HeaderDetailsContent>('default');
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const { data: session } = useSession({ required: true });

  const handleToContent = (content: HeaderDetailsContent) => {
    if (content === 'close') {
      onClose();
      return;
    }

    setContentKind(content);
  };

  return (
    <Popover isOpen={isOpen} onClose={onClose} onOpen={onOpen} closeOnBlur>
      <PopoverAnchor>
        <Avatar
          alt={session?.user?.name || ''}
          as={Button}
          src={session?.user?.image || '#'}
          w={IMAGE_SIZE}
          h={IMAGE_SIZE}
          onClick={onToggle}
        />
      </PopoverAnchor>

      <Content content={contentKind} toContent={handleToContent} />
    </Popover>
  );
};
