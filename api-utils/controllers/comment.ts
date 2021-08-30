import { getSession } from "next-auth/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../libs/prisma";

export async function createComment(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  // 1. make sure the project to like exist
  const existingProject = await prisma.project.findUnique({
    where: { id: req.body.id },
  });

  // 2. if no, throw error
  if (!existingProject) {
    throw new Error(`No project exists for id - ${req.body.id}`);
  }

  // 3. if yes, add a comment
  const comment = await prisma.comment.create({
    data: {
      text: req.body.text,
      project: {
        connect: {
          id: req.body.id,
        },
      },
      author: {
        connect: {
          id: Number(session?.userId),
        },
      },
    },
    include: {
      author: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });

  res.status(200).json({
    success: true,
    message: "Comment successfully created",
    data: comment,
  });
}
