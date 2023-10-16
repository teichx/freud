import NextAuth from 'next-auth/next';

import { authOptions } from './authOptions';

export const nextAuth = NextAuth(authOptions);
