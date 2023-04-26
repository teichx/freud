import { useEffect, useRef } from 'react';

import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';

import { ApiRoutes, Routes } from '~/core/constants';
import { PageLoader } from '~/core/sections/PageLoader';
import { useAuth } from '~/core/services';

import { GetResultSuccess } from '../api/auth/token';

type ParamsProps = {
  code: string;
  scope: string;
};

type IdTokenData = {
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  at_hash: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  locale: string;
};

export const Authenticated = () => {
  const refreshRef = useRef(false);
  const { pathname, asPath, replace } = useRouter();
  const { setToken, saveData, logout } = useAuth();

  useEffect(() => {
    if (refreshRef.current) return;
    refreshRef.current = true;
    logout();

    const query = asPath.replace(`${pathname}`, '');
    const urlSearchParams = new URLSearchParams(query);
    const params = Object.fromEntries(urlSearchParams.entries()) as ParamsProps;

    fetch(ApiRoutes.Auth.Token, {
      method: 'POST',
      body: JSON.stringify({ origin, code: params.code }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
      .then<GetResultSuccess>((result) => result.json())
      .then((tokens) => {
        setToken({
          bearer: tokens?.access_token || '',
          refreshToken: tokens.refresh_token || undefined,
          expireAt: new Date(tokens.expiry_date || ''),
          redirectUri: tokens.redirectUri,
        });

        const data = jwtDecode<IdTokenData>(tokens.id_token || '');
        saveData({
          id: data.sub,
          name: data.name,
          givenName: data.given_name,
          familyName: data.family_name,
          picture: data.picture,
          clientId: data.aud,
          email: data.email,
        });

        replace(Routes.Core.Dashboard.Default);
      })
      .catch(console.log);
  }, [asPath, pathname, setToken, saveData, logout, replace]);

  return <PageLoader />;
};

export default Authenticated;
