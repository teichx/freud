import { FC } from 'react';

import {
  Divider,
  HStack,
  Icon,
  IconButton,
  PopoverBody,
  PopoverContent,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FiCheck, FiChevronLeft } from 'react-icons/fi';

import { HeaderButton } from '../../../../components/HeaderButton';
import { HeaderDetailsContentProps } from './types';

let currentLanguage = 'pt-BR';

const useLanguage = () => ({
  currentLanguage,
  toLanguage: (language: string) => (currentLanguage = language),
});

export const ContentLanguage: FC<HeaderDetailsContentProps> = ({
  toContent,
}) => {
  const { t } = useTranslation();
  const { currentLanguage, toLanguage } = useLanguage();

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

          <Text>{t('header.language.title')}</Text>
        </HStack>
      </PopoverBody>

      <Divider />

      <PopoverBody px='0'>
        {t('common:languages.options')
          .split(',')
          .map((langName) => (
            <HeaderButton
              key={langName}
              onClick={() => {
                toLanguage(langName);
                setTimeout(() => toContent('default'), 200);
              }}
              leftIcon={
                <Icon
                  ml='0.5'
                  as={FiCheck}
                  visibility={
                    currentLanguage === langName ? 'visible' : 'hidden'
                  }
                />
              }
            >
              {t(`common:languages.${langName}`)}
            </HeaderButton>
          ))}
      </PopoverBody>
    </PopoverContent>
  );
};
