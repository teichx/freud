import { Button, Text } from '@chakra-ui/react';

import { SidebarButtonProps } from './types';

export function SidebarButton<TProps = SidebarButtonProps>({
  label,
  ...props
}: SidebarButtonProps & TProps) {
  return (
    <Button
      size='sm'
      sx={{
        bg: 'transparent',
        color: 'blackAlpha.700',
        _selected: {
          bg: 'whiteAlpha.800',
          color: 'blackAlpha.800',
          _hover: {
            bg: 'whiteAlpha.900',
            color: 'blackAlpha.900',
          },
        },
        _hover: {
          bg: 'whiteAlpha.800',
          color: 'blackAlpha.800',
          _disabled: {
            bg: 'transparent',
            color: 'blackAlpha.700',
          },
        },
        _dark: {
          color: 'whiteAlpha.700',
          _hover: {
            color: 'blackAlpha.800',
            _disabled: {
              color: 'whiteAlpha.700',
            },
          },
          _selected: {
            color: 'blackAlpha.800',
            _hover: {
              color: 'blackAlpha.900',
            },
          },
        },
        ...props.sx,
      }}
      {...props}
    >
      <Text ml='0' mr='auto'>
        {label}
      </Text>
    </Button>
  );
}
