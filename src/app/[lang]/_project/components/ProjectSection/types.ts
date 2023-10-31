import { ReactNode } from 'react';

import { SystemStyleObject } from '@chakra-ui/react';

type ProjectSectionBaseProps = {
  title: string | string[];
  paragraphs: (string | ReactNode)[];
  textPosition: 'left' | 'right';
  sx?: SystemStyleObject;
  image?: ProjectSectionImageProps;
};

export type ProjectSectionProps =
  | (ProjectSectionBaseProps & {
      image: ProjectSectionImageProps;
      children?: undefined;
    })
  | (ProjectSectionBaseProps & {
      image?: undefined;
      children?: ReactNode;
    });

export type ProjectSectionImageProps = {
  src: string;
  alt: string;
  sx?: SystemStyleObject;
};
