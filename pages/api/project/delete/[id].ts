import nc from "../../../../api-utils/nc";
import { deleteProject } from "../../../../api-utils/controllers/projects";

// ======================== GET /api/project/delete/:id ========================
export default nc.delete(deleteProject);
