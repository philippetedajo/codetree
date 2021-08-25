import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import prisma from "../../../libs/prisma";

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
  secret: process.env.SECRET,
  callbacks: {
    signIn: async (profile: any, account: any, metadata: any) => {
      // https://developer.github.com/v3/users/emails/#list-email-addresses-for-the-authenticated-user
      const res = await fetch("https://api.github.com/user/emails", {
        headers: {
          authorization: `token ${account.accessToken}`,
        },
      });
      const emails = await res.json();
      if (!emails || emails.length === 0) {
        return;
      }
      // Sort by primary email - the user may have several emails, but only one of them will be primary
      const sortedEmails = emails.sort(
        (a: any, b: any) => b.primary - a.primary
      );
      profile.email = sortedEmails[0].email;
    },
  },
};

// @ts-ignore
const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;
