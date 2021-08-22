import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const projectId = req.query.id;

  const project = await prisma.project.update({
    where: {
      id: Number(projectId),
    },
    data: {
      title: req.body.title,
    },
  });
  res.json(project);
}
