import { getSession } from "next-auth/client";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export const permissionHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getSession({ req });

  if (!session) {
    return res.send({
      error: "You must be sign in to view the protected content on this page.",
    });
  }
};
