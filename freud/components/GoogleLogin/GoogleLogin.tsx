import { FC, useEffect, useId, useState } from 'react';

import { useAuth } from 'context/Auth';
import jwt_decode from 'jwt-decode';

import { GoogleLoginCallback, GoogleLoginProps, JWTTokenProps } from './types';

export const GoogleLogin: FC<GoogleLoginProps> = ({
  theme = 'outline',
  size = 'medium',
}) => {
  const divId = useId();
  const { saveData } = useAuth();
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
        const decoded = jwt_decode<JWTTokenProps>(data.credential);
        saveData({
          name: decoded.name,
          givenName: decoded.given_name,
          familyName: decoded.family_name,
          picture: decoded.picture,
          clientId: decoded.aud,
          email: decoded.email,
        });
      },
    });

    google.accounts.id.renderButton(elementParent, {
      theme,
      size,
    });
  }, [divId, domLoaded, saveData, theme, size]);

  return domLoaded ? <div id={divId} /> : null;
};
