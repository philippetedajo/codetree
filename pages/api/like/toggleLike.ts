import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import prisma from "../../../libs/prisma";

export default async function toggleLike(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  // 1. make sure that the user is authenticated
  if (session) {
    // 2. check if the like already exists
    const [like] = await prisma.like.findMany({
      where: {
        AND: [
          { authorId: Number(session.userId) },
          { projectId: req.body.projectId },
        ],
      },
    });

    //3. if it exists remove it
    if (like) {
      try {
        await prisma.like.delete({
          where: {
            id: like.id,
          },
        });
        res.json({ success: true, message: "Successfully unlike the project" });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
      }
    }

    // 4. if not, create a like
    if (!like) {
      try {
        await prisma.like.create({
          data: {
            project: {
              connect: {
                id: req.body.projectId,
              },
            },
            author: {
              connect: {
                id: Number(session.userId),
              },
            },
          },
        });
        res.json({ success: true, message: "Successfully like the project" });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
      }
    }

    return;
  } else {
    res.status(500).json({
      success: false,
      message: "You need to be authenticated to perform this operation",
    });
  }
}
