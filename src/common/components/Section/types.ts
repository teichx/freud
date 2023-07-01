import { BoxProps } from '@chakra-ui/react';

import { LoaderType } from '~/core/services/Loader';

export type SectionProps = {
  label?: string | null;
  loaderKeys?: LoaderType[];
  disabledLoading?: boolean;
} & BoxProps;
