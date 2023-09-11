import { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/lib/api";

interface Auth {
  id: string;
  role: string;
  company_id: number;
  company_url_key: string;
  firstname: string;
  is_activated: number;
  is_admin: number;
  is_disabled: number;
  lang: string;
  lastname: string;
  member_id: number;
  phonenumber: string;
  photo: string;
  username: string;
  token?: string | undefined;
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },

      // TODO: Add proper types to promise
      async authorize(credentials): Promise<any> {
        const response = await login({
          username: credentials?.email || "",
          password: credentials?.password || "",
        });

        if (response?.token) {
          return response;
        }

        return undefined;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
  // TODO: See refresh tokens logic
  callbacks: {
    jwt: async ({ token, user }: any) => {
      if (user) {
        token = user;
      }
      return Promise.resolve(token);
    },
    // If you want to use the role in client components
    session: async ({ session, token }: any) => {
      session.token = token.token;
      session.user = token.user;

      return Promise.resolve(session);
    },
  },
};
