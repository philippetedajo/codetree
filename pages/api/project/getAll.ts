import prisma from "../../../libs/prisma";
import nc from "../../../server-utils/nc";

export default nc
  //GET /api/project/getAll
  .get(async (req, res) => {
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
        },
      });

      res.status(200).json({
        success: true,
        message: "Projects successfully found",
        data: { projects },
      });
    } catch (err) {
      throw new Error(err);
    }
  });
