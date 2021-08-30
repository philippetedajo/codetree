import nc from "../../../../api-utils/nc";
import { updateProject } from "../../../../api-utils/controllers/project";

// ======================== Update a project : /api/project/update/:id ========================
export default nc.put(updateProject);
