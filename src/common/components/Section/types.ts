import { BoxProps } from '@chakra-ui/react';

export type SectionProps = {
  label?: string | null;
  disabledLoading?: boolean;
} & BoxProps;

export type SectionLoaderProps = {
  'data-is-loading'?: boolean;
};
