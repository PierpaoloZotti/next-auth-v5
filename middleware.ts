import NextAuth from 'next-auth';
import authConfig from '@/auth.config';

const { auth } = NextAuth(authConfig);
export default auth((req) => {
  // req.auth
  const isLoggedIn = !!req.auth;
  console.log('isLoggedIn', isLoggedIn);
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
