'use client';
import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { ApiRoutes } from '~/core/constants';
import { PageLoader } from '~/core/sections/PageLoader';

const Login = () => {
  const route = useRouter();

  useEffect(() => {
    route.push(ApiRoutes.Auth.Login);
  }, [route]);

  return <PageLoader />;
};

export default Login;
