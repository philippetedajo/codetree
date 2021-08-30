import nc from "../../../api-utils/nc";
import { getAllProject } from "../../../api-utils/controllers/projects";

// ======================== Get all project : /api/project ========================
export default nc.get(getAllProject);
