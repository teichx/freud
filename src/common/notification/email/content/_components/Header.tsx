import { Heading as EmailHeading } from '@react-email/components';
import { Img } from '@react-email/components';

import { emailTheme } from '../_theme/emailTheme';
import { LOGO_HEIGHT } from '../../../../../common/components/Logo/constants';

export const Header = () => (
  <EmailHeading
    style={{
      marginTop: 0,
      marginBottom: 0,
      padding: `${emailTheme.sizes[5]} ${emailTheme.sizes[10]}`,
      color: emailTheme.colors.white,
      backgroundColor: emailTheme.colors.book.darkBlue[500],
    }}
  >
    <Img
      height={LOGO_HEIGHT.large}
      alt='Freud'
      src={`${process.env.NEXT_PUBLIC_VERCEL_URL}/static/logo/full.png`}
    />
  </EmailHeading>
);
