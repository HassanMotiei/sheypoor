export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/auth/profile"],
  // matcher: ["/((?!register|api|login).*)"],
};
