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
import { useTranslation } from 'react-i18next';
import { FiCheck, FiChevronLeft } from 'react-icons/fi';

import { HeaderButton } from '../../../../components/HeaderButton';
import { HeaderDetailsContentProps } from './types';

export const ContentAppearance: FC<HeaderDetailsContentProps> = ({
  toContent,
}) => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'header.appearance',
  });
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
        {t('themes')
          .split(',')
          .map((themeName) => (
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
              {t('text', { appearance: themeName })}
            </HeaderButton>
          ))}
      </PopoverBody>
    </PopoverContent>
  );
};
