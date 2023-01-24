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

import { HeaderButton } from '../../../../components/HeaderButton';
import { HeaderDetailsContentProps } from './types';

const ptBR = {
  title: 'Aparência',
  themes: {
    dark: 'Tema escuro',
    light: 'Tema claro',
  },
} as const;

export const ContentAppearance: FC<HeaderDetailsContentProps> = ({
  toContent,
}) => {
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

          <Text>{ptBR.title}</Text>
        </HStack>
      </PopoverBody>

      <Divider />

      <PopoverBody px='0'>
        {Object.entries(ptBR.themes).map(([themeName, themeTranslate]) => (
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
            {themeTranslate}
          </HeaderButton>
        ))}
      </PopoverBody>
    </PopoverContent>
  );
};
