import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { GetServerSideProps, NextApiHandler } from "next";
import { IncomingMessage, ServerResponse } from "http";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

export const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: "session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export function withSessionApiRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

export function withSessionSsr(handler: GetServerSideProps) {
  return withIronSessionSsr(handler, sessionOptions);
}

export const verifySession = (
  req: IncomingMessage & { cookies: NextApiRequestCookies },
  res: ServerResponse
) => {
  const user = req.session.user;

  if (!user) {
    res.setHeader("location", "/");
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }

  return { user };
};

export const redirect = (
  location: string,
  req: IncomingMessage & { cookies: NextApiRequestCookies },
  res: ServerResponse
) => {
  res.setHeader("location", location);
  res.statusCode = 302;
  res.end();
};
