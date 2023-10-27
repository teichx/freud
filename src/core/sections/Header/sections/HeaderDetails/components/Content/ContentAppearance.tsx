import { FC } from 'react';

import {
  Divider,
  HStack,
  Icon,
  IconButton,
  PopoverBody,
  PopoverContent,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FiCheck, FiChevronLeft } from 'react-icons/fi';

import { useScopedI18n } from '~/i18n/client';

import { HeaderButton } from '../../../../components/HeaderButton';
import { HeaderDetailsContentProps } from './types';

const themeColors = ['light', 'dark'] as const;

export const ContentAppearance: FC<HeaderDetailsContentProps> = ({
  toContent,
}) => {
  const t = useScopedI18n('translations.header.appearance');
  const tToggle = useScopedI18n('components.toggleTheme');
  const { setColorMode, colorMode, forced } = useColorMode();

  const currentTheme = forced ? 'system' : colorMode;

  return (
    <PopoverContent mx={4} mb={0}>
      <PopoverBody>
        <HStack>
          <IconButton
            aria-label='back'
            borderRadius='full'
            onClick={() => toContent('default')}
          >
            <Icon as={FiChevronLeft} />
          </IconButton>

          <Text>{t('title')}</Text>
        </HStack>
      </PopoverBody>

      <Divider />

      <PopoverBody px='0'>
        {themeColors.map((themeName) => (
          <HeaderButton
            key={themeName}
            onClick={() => {
              setColorMode(themeName);
              toContent('default');
            }}
            leftIcon={
              <Icon
                ml='0.5'
                as={FiCheck}
                visibility={currentTheme === themeName ? 'visible' : 'hidden'}
              />
            }
          >
            {t('text', { appearance: tToggle(themeName) })}
          </HeaderButton>
        ))}
      </PopoverBody>
    </PopoverContent>
  );
};
