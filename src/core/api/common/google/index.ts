import {
  OAuth2Client,
  OAuth2ClientOptions,
  UserRefreshClient,
} from 'google-auth-library';

import { extractToken } from '../token';
import { ReqProps } from '../types';
export * from './drive';

export const GOOGLE_AUTHENTICATION_SCOPES = [
  'profile',
  'email',
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.appdata',
  'https://www.googleapis.com/auth/drive.appfolder',
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/drive.resource',
];

export const getClient = (options?: OAuth2ClientOptions) =>
  new OAuth2Client({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_AUTHENTICATE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_AUTHENTICATE_CLIENT_SECRET,
    redirectUri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URLS,
    ...(options || {}),
  });

export const getRefreshClient = ({ req }: ReqProps) =>
  new UserRefreshClient({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_AUTHENTICATE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_AUTHENTICATE_CLIENT_SECRET,
    refreshToken: extractToken({ req }),
  });
