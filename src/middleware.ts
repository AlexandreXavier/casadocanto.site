import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isDashboardRoute = createRouteMatcher(['/dashboard(.*)']);
const isFotoRoute =createRouteMatcher(['/photos(.*)']);

export default clerkMiddleware((auth, req) => {

  // Restrict dashboard routes to signed in users
  if (isDashboardRoute(req)) auth().protect();

   // Restrict dashboard routes to signed in users
   if (isFotoRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};