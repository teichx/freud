import { Box } from '@chakra-ui/react';
import { setStaticParamsLocale } from 'next-international/server';

import { Footer, Header } from './_project/components';

const Index = ({ params: { lang } }: { params: { lang: string } }) => {
  setStaticParamsLocale(lang);

  return (
    <Box width='100%'>
      <Header />

      <Box h='50vh' />

      <Footer />
    </Box>
  );
};

export default Index;
