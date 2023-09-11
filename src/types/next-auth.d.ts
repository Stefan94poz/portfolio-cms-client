import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
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
    token: string;
  }

  interface Session {
    user: User;
    token: string;
    expires: string;
  }
  interface AuthPromise {
    user: User | null;
    token: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
  }
}
