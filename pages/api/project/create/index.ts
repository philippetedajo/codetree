import nc from "../../../../api-utils/nc";
import { createProject } from "../../../../api-utils/controllers/projects";

// ======================== POST /api/project/create ========================
export default nc.post(createProject);
