import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { ApiRoutes } from '~/core/constants';
import { PageLoader } from '~/core/sections/PageLoader';

export const Login = () => {
  const { push } = useRouter();

  useEffect(() => {
    const { origin } = window.location;

    push(`${ApiRoutes.Auth.GetUrl}?baseUrl=${encodeURIComponent(origin)}`);
  }, [push]);

  return <PageLoader />;
};

export default Login;
