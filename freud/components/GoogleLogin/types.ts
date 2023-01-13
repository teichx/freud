export type GoogleLoginCallback = {
  clientId: string;
  client_id: string;
  credential: string;
  select_by: 'btn';
};

export type JWTTokenProps = {
  iss: string;
  nbf: number;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  azp: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  iat: number;
  exp: number;
  jti: string;
};

export type GoogleLoginProps = {
  size?: 'small' | 'medium' | 'large';
  theme?: 'outline';
};
