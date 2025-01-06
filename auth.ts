import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import { authConfig } from './auth.config';

async function getUser(): Promise<User | undefined> {
  try {
    const user = {
      id: "1",
      name: "Admin",
      email: "admin@email.com",
      password: "admin"
    }
    return user
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string() })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const {email} = parsedCredentials.data
          const {password } = parsedCredentials.data;

          const user = await getUser();
          if (!user) return null;

          if (password == user.password && email == user.email) return user

          return null

        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});