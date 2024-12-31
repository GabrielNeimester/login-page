import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnShop = nextUrl.pathname.startsWith('/shop');
      if (isOnShop) {
        if (isLoggedIn) return true;
        return false;
      }
      else if (isLoggedIn) {
        return Response.redirect(new URL('/shop', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;