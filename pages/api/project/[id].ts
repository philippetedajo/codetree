import prisma from "../../../libs/prisma";
import nc from "../../../api-utils/nc";
import { permissionHandler } from "../../../api-utils/middlewares";

export default nc
  // ======================== GET /api/project/:id ========================
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
        data: project,
      });
    } catch (err) {
      throw new Error(err);
    }
  })

  // ======================== PUT /api/project/:id ========================
  .use(permissionHandler)
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
        data: project,
      });
    } catch (err) {
      if (err.code === "P2025") {
        res.status(400).json({ success: false, err: err.meta.cause });
      }
    }
  })

  // ======================== DELETE /api/project/:id ========================
  .use(permissionHandler)
  .delete(async (req, res) => {
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
  });
