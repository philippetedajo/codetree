import nc from "../../../api-utils/nc";
import { getAllProjects } from "../../../api-utils/controllers/projects";

// ======================== Get all projects : /api/project ========================
export default nc.get(getAllProjects);
