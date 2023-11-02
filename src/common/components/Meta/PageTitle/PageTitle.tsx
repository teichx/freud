import { FC, useEffect } from 'react';

import { PageTitleProps } from './types';

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  useEffect(() => {
    const oldTitle = document.title;
    document.title = title;

    return () => {
      document.title = oldTitle;
    };
  }, [title]);

  return null;
};
