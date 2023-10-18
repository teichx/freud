import { FC } from 'react';

import { Mark } from '@chakra-ui/react';

import { TextHighlightProps } from './types';
import { useTextHighlight } from './useTextHighlight';

export const TextHighlight: FC<TextHighlightProps> = ({
  query,
  children,
  styles,
  transformFunction,
}) => {
  const chunks = useTextHighlight({
    text: children,
    query,
    transformFunction,
  });

  return (
    <span>
      {chunks.map(({ match, text }, index) =>
        match ? (
          <Mark key={`${text}-${index}`} sx={styles}>
            {text}
          </Mark>
        ) : (
          text
        )
      )}
    </span>
  );
};
