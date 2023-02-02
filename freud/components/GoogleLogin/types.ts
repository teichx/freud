import { ButtonProps } from '@chakra-ui/react';

export type GoogleLoginProps = {
  radius?: 'small' | 'medium' | 'large';
  size?: 'small' | 'medium' | 'large';
  theme?: 'outline';
};

type SizeVariant = Exclude<GoogleLoginProps['size'], undefined>;

export type ButtonSizeMappingProps = {
  [key in SizeVariant]: ButtonProps['size'];
};

export type ButtonRadiusMappingProps = {
  [key in SizeVariant]: ButtonProps['borderRadius'];
};
