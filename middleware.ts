/*import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ["/api/uploadthing","/invite/:id",
    "/servers/:serverId/channels/:channelId"],
  ignoredRoutes: 
  [
      "/((?!api|trpc))(_next|.+\\..+)(.*)", // Keep this default one
      "/invite/:id",
      "/servers/:serverId/channels/:channelId"
    ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)" ],
};*/

import { authMiddleware } from "@clerk/nextjs";

// This protects all routes but allows some to be public or ignored
export default authMiddleware({
  publicRoutes: [
    "/api/uploadthing",
    "/invite/*", // <-- use * instead of :id
    "/servers/*/channels/*" // <-- wildcard for nested dynamic segments
  ],
  ignoredRoutes: [
    "/((?!api|trpc))(_next|.+\\..+)(.*)", // default static asset ignore
    "/invite/*",
    "/servers/*/channels/*"
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

