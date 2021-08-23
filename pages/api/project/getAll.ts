import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prisma";

export default async function getAllProjects(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await prisma.project.findMany({
    where: {
      private: false,
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

  res.json(result);
}
