import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { PageLoader } from '~/core/sections/PageLoader';

export const Login = () => {
  const { push } = useRouter();

  useEffect(() => {
    const { origin } = window.location;

    push(`/api/auth/get-url?baseUrl=${encodeURIComponent(origin)}`);
  }, [push]);

  return <PageLoader />;
};

export default Login;
