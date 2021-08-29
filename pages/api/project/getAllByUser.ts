import prisma from "../../../libs/prisma";
import { getSession } from "next-auth/client";
import nc from "../../../api-utils/nc";

export default nc
  // ======================== GET /api/project/getAllByUser ========================
  .get(async (req, res) => {
    try {
      const session = await getSession({ req });
      if (!session) {
        res.statusCode = 403;
        return { props: { projects: [] } };
      }

      const projects = await prisma.project.findMany({
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

      res.status(200).json({
        success: true,
        message: "Projects successfully found",
        data: projects,
      });
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  });
