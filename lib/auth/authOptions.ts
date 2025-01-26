import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { api } from "@/convex/_generated/api";
import { fetchMutation } from "convex/nextjs";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "secret",
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({ user }) {
      if (user) { 
        try {
          await fetchMutation(api.users.createUser, {
            name: user.name || "",
            email: user.email || "",
            image: user.image || "",
          });
        } catch (error) {
          console.error("Error creating user: ", error);
          throw new Error("Failed to create user");
        }
      }
      return true;
    }
  },
};
