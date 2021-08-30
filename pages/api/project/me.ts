import nc from "../../../api-utils/nc";
import { getMyProjects } from "../../../api-utils/controllers/project";

// ======================== Get all my projects : /api/project/me ========================
export default nc.get(getMyProjects);
