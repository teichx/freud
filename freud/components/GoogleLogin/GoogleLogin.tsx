import { FC, useEffect, useId, useState } from 'react';

import jwt_decode from 'jwt-decode';

import { useAuth } from '~/services/Auth';

import { GoogleLoginProps, JWTTokenProps } from './types';

export const GoogleLogin: FC<GoogleLoginProps> = ({
  theme = 'outline',
  size = 'medium',
}) => {
  const divId = useId();
  const { saveData, toInitialPage } = useAuth();
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
      callback: (data) => {
        const decoded = jwt_decode<JWTTokenProps>(data.credential);
        saveData({
          id: decoded.sub,
          name: decoded.name,
          givenName: decoded.given_name,
          familyName: decoded.family_name,
          picture: decoded.picture,
          clientId: decoded.aud,
          email: decoded.email,
        });
        toInitialPage();
      },
    });

    google.accounts.id.renderButton(elementParent, {
      type: 'standard',
      theme,
      size,
    });
  }, [divId, domLoaded, saveData, toInitialPage, theme, size]);

  return domLoaded ? <div id={divId} /> : null;
};
