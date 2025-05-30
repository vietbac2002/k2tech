// import { authOptions } from "@/lib/auth";
import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";
const handler = NextAuth(authOptions);
// import { handlers } from "auth"
export { handler as GET, handler as POST };
