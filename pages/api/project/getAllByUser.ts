import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prisma";
import { getSession } from "next-auth/client";

export default async function getAllProjectsByUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { projects: [] } };
  }

  const result = await prisma.project.findMany({
    where: {
      author: { email: session?.user?.email },
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });

  res.json(result);
}
