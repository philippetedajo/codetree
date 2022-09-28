import "iron-session";
import { GoogleAuthInput, User } from "./graphql/generated/graphql";

declare global {
  interface Window {
    withGoogle: (input: GoogleAuthInput) => void;
  }
}

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      message?: string;
      token?: string | null;
      status: boolean;
      data: User;
      isLoggedIn?: boolean;
    };
  }
}
