import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
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
    jwt: async ({ token, user }) => {
      if (user) {
        Object.assign(token, { id: user.id });
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        Object.assign(session.user, { id: token.id });
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
