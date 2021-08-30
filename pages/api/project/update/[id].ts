import nc from "../../../../api-utils/nc";
import { updateProject } from "../../../../api-utils/controllers/projects";

// ======================== Update a project : /api/project/update/:id ========================
export default nc.put(updateProject);
