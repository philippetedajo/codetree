import { getSession } from "next-auth/client";
import { NextApiRequest, NextApiResponse } from "next";

export async function permissionHandler(
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) {
  const session = await getSession({ req });

  //Uncomment to enable permission
  // if (!session) {
  //   return res.send({
  //     error: "You are not authorize to access protected content.",
  //   });
  // }

  next();
}
