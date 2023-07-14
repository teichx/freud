import { RefAttributes } from 'react';

import {
  Select as ChakraSelect,
  GroupBase,
  Props,
  SelectInstance,
} from 'chakra-react-select';

export function Select<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: Props<Option, IsMulti, Group> &
    RefAttributes<SelectInstance<Option, IsMulti, Group>>
) {
  return (
    <ChakraSelect
      {...props}
      chakraStyles={{
        dropdownIndicator: (x) => ({
          ...x,
          bg: 'blackAlpha.100',
          _dark: {
            bg: 'whiteAlpha.100',
          },
        }),
      }}
    />
  );
}
