import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import prisma from "../../../libs/prisma";

export default async function toggleLike(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  console.log(session);

  // 1. make sure that the user is authenticated
  if (session) {
    // 2. check if the like already exists, if it exists remove it
    const likes = await prisma.like.findMany({
      where: {
        AND: [{ authorId: 1 }, { projectId: 1 }],
      },
    });

    if (likes) {
      await prisma.like.delete({
        where: {
          id: 1,
        },
      });
      return true;
    }

    // 3. if not, create a like
    if (!likes) {
      await prisma.like.create({
        data: {
          authorId: 1,
          projectId: 1,
        },
      });
    }
  }

  // 4. return boolean
  return false;
}
