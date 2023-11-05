import { DynamoDBAdapter } from '@auth/dynamodb-adapter';
import * as crypto from 'crypto';
import NextAuth from 'next-auth/next';
import Google from 'next-auth/providers/google';

import { dynamodbClient } from '~/common/database/dynamo';
import { DefaultTable } from '~/common/database/dynamo/tableDefinition';

if (!global.crypto) {
  Object.assign(global, { crypto });
}

const adapter = DynamoDBAdapter(dynamodbClient, DefaultTable);

type AuthOptions = Parameters<typeof NextAuth>[2];
export const authOptions: AuthOptions = {
  adapter,
  providers: [
    Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_AUTHENTICATE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_AUTHENTICATE_CLIENT_SECRET || '',
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 16,
  },
  debug: process.env.NODE_ENV !== 'production',
  callbacks: {
    redirect: async ({ baseUrl }) => `${baseUrl}/core`,
    jwt: async ({ token, user, account }) => {
      if (user) {
        Object.assign(token, {
          id: user.id,
          googleId:
            account?.provider === 'google'
              ? account?.providerAccountId
              : undefined,
        });
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        Object.assign(session.user, { id: token.id, googleId: token.googleId });
      }

      return session;
    },
  },
};
