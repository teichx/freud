import { FC, useMemo } from 'react';

import { Link } from '@chakra-ui/react';

import { GoogleLoginProps } from './types';

export const GoogleLogin: FC<GoogleLoginProps> = ({ scope = ['profile'] }) => {
  const getGoogleUrl = useMemo(() => {
    const redirectUri =
      process.env.NEXT_PUBLIC_GOOGLE_AUTHENTICATE_REDIRECT_URL;
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_AUTHENTICATE_CLIENT_ID;
    const baseUrl = process.env.NEXT_PUBLIC_GOOGLE_AUTHENTICATE_URL;

    if (!redirectUri) return '';
    if (!clientId) return '';
    if (!baseUrl) return '';

    const searchParams = new URLSearchParams({
      redirect_uri: redirectUri,
      client_id: clientId,
      access_type: 'offline',
      scope: scope.join(' '),
      response_type: 'code',
    });

    return `${baseUrl}?${searchParams}`;
  }, [scope]);

  return getGoogleUrl ? <Link href={getGoogleUrl}>Action</Link> : null;
};
