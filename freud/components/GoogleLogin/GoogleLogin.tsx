import { FC, useEffect, useId, useState } from 'react';

import jwt_decode from 'jwt-decode';

import { GoogleLoginCallback, GoogleLoginProps, JWTTokenProps } from './types';

export const GoogleLogin: FC<GoogleLoginProps> = ({ handleLogin }) => {
  const divId = useId();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    if (!domLoaded) return;

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_AUTHENTICATE_CLIENT_ID;
    if (!clientId) return;

    const elementParent = document.getElementById(divId);
    if (!elementParent) return;
    if (typeof google === 'undefined') return;

    google.accounts.id.initialize({
      client_id: clientId,
      callback: (data: GoogleLoginCallback) => {
        if (!handleLogin) return;

        const decoded = jwt_decode<JWTTokenProps>(data.credential);
        handleLogin(decoded);
      },
    });

    google.accounts.id.renderButton(elementParent, {
      theme: 'outline',
      size: 'large',
    });
  }, [divId, domLoaded, handleLogin]);

  return domLoaded ? <div id={divId} /> : null;
};
