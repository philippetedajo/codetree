import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

import prisma from "../../libs/prisma";

export async function getAllProject(req: NextApiRequest, res: NextApiResponse) {
  try {
    const projects = await prisma.project.findMany({
      where: {
        private: false,
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
        likes: {
          select: {
            id: true,
          },
        },
        comments: {
          select: {
            id: true,
          },
        },
      },
    });

    res.status(200).json({
      success: true,
      message: "Projects successfully found",
      data: projects,
    });
  } catch (err) {
    throw new Error(err);
  }
}

export async function getProject(req: NextApiRequest, res: NextApiResponse) {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: Number(req.query?.id),
      },
    });

    res.status(200).json({
      success: true,
      message: "Project successfully found",
      data: project,
    });
  } catch (err) {
    throw new Error(err);
  }
}

export async function createProject(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { title, content } = req.body;
    const session = await getSession({ req });

    const project = await prisma.project.create({
      data: {
        content,
        title,
        author: {
          connect: {
            email: session?.user?.email || undefined,
          },
        },
      },
    });

    res.status(200).json({
      success: true,
      message: "Project successfully created",
      data: project,
    });
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateProject(req: NextApiRequest, res: NextApiResponse) {
  try {
    const project = await prisma.project.update({
      where: {
        id: Number(req.query.id),
      },
      data: {
        title: req.body.title,
        content: req.body.content,
      },
    });

    res.status(200).json({
      success: true,
      message: "Project successfully updated",
      data: project,
    });
  } catch (err) {
    if (err.code === "P2025") {
      res.status(400).json({ success: false, err: err.meta.cause });
    }
  }
}

export async function deleteProject(req: NextApiRequest, res: NextApiResponse) {
  try {
    await prisma.project.delete({
      where: { id: Number(req.query.id) },
    });

    res.status(200).json({
      success: true,
      message: "Project successfully deleted",
    });
  } catch (err) {
    if (err.code === "P2025") {
      res.status(400).json({ success: false, error: err.meta.cause });
    }
  }
}
