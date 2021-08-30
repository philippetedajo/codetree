import nc from "../../../../api-utils/nc";
import { createProject } from "../../../../api-utils/controllers/project";

// ======================== POST /api/project/create ========================
export default nc.post(createProject);
