import nc from "../../../api-utils/nc";
import { getProject } from "../../../api-utils/controllers/projects";

// ======================== Get a project : /api/project/get/:id ========================
export default nc.get(getProject);
