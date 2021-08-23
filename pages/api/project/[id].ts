import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    await updateProject(req, res);
  } else if (req.method === "DELETE") {
    await deleteProject(req, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// UPDATE /api/post/:id
async function updateProject(req: NextApiRequest, res: NextApiResponse) {
  const project = await prisma.project.update({
    where: {
      id: Number(req.query.id),
    },
    data: {
      title: req.body.title,
    },
  });
  res.json(project);
}

// DELETE /api/post/:id
async function deleteProject(req: NextApiRequest, res: NextApiResponse) {
  const post = await prisma.project.delete({
    where: { id: Number(req.query.id) },
  });
  res.json(post);
}
