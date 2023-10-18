import {
  HighlightProps,
  UseHighlightProps as DefaultUseHighlightProps,
} from '@chakra-ui/react';

export type UseHighlightProps = DefaultUseHighlightProps & {
  transformFunction?: (text: string) => string;
};

export type TextHighlightProps = Omit<HighlightProps, 'children'> &
  Pick<UseHighlightProps, 'transformFunction'> & {
    children: string;
  };

export type Chunk = {
  text: string;
  match: boolean;
};
