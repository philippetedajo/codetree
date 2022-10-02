import "iron-session";
import { User } from "./graphql/generated/graphql";
import { OauthInput, OauthProvider } from "./store/features/authSlice";

declare global {
  interface Window {
    withOauth: (input: OauthInput, provider: OauthProvider) => void;
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
