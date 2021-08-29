import { getSession } from "next-auth/client";
import prisma from "../../../libs/prisma";
import nc from "../../../api-utils/nc";

export default nc
  // ======================== POST /api/project/create ========================
  .post(async (req, res) => {
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
  });
