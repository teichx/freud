import { ContentAppearance } from './ContentAppearance';
import { ContentDefault } from './ContentDefault';
import { ContentLanguage } from './ContentLanguage';
import { ContentProps, ContentVariationProps } from './types';

const contentVariation: ContentVariationProps = {
  close: () => null,
  default: ContentDefault,
  language: ContentLanguage,
  appearance: ContentAppearance,
};

export const Content = ({ toContent, content }: ContentProps) => {
  const ContentComponent = contentVariation[content];

  return <ContentComponent toContent={toContent} />;
};
