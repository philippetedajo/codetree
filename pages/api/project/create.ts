import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import prisma from "../../../libs/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, content } = req.body;
  const session = await getSession({ req });

  const result = await prisma.project.create({
    data: {
      content,
      title,
      author: {
        connect: {
          // @ts-ignore
          email: session?.user?.email,
        },
      },
    },
  });

  res.json(result);
}
