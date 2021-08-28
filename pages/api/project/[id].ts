import prisma from "../../../libs/prisma";
import nc from "../../../server-utils/nc";

export default nc
  // GET /api/project/:id ========================
  .get(async (req, res) => {
    try {
      const project = await prisma.project.findUnique({
        where: {
          id: Number(req.query?.id),
        },
      });

      res.status(200).json({
        success: true,
        message: "Project successfully found",
        data: { project },
      });
    } catch (err) {
      throw new Error(err);
    }
  })

  // UPDATE /api/project/:id ========================
  .put(async (req, res) => {
    try {
      const project = await prisma.project.update({
        where: {
          id: Number(req.query.id),
        },
        data: {
          title: req.body.title,
        },
      });

      res.status(200).json({
        success: true,
        message: "Project successfully updated",
        data: { project },
      });
    } catch (err) {
      if (err.code === "P2025") {
        res
          .status(400)
          .json({ success: false, message: err.meta.cause, data: null });
      }
    }
  })

  // DELETE /api/project/:id ========================
  .delete(async (req, res) => {
    try {
      await prisma.project.delete({
        where: { id: Number(req.query.id) },
      });

      res.status(200).json({
        success: true,
        message: "Project successfully deleted",
        data: null,
      });
    } catch (err) {
      if (err.code === "P2025") {
        res
          .status(400)
          .json({ success: false, message: err.meta.cause, data: null });
      }
    }
  });
