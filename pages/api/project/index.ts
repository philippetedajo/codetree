import nc from "../../../api-utils/nc";
import { getAllProjects } from "../../../api-utils/controllers/project";

// ======================== Get all projects : /api/project ========================
export default nc.get(getAllProjects);
