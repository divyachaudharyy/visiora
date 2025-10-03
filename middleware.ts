import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
  // optional: define what routes to protect etc.
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/", 
    "/(api|trpc)(.*)",
  ],
};