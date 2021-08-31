import nc from "../../../api-utils/nc";
import { getMyComments } from "../../../api-utils/controllers/comment";

// ======================== GET /api/comment/delete/:id ========================
export default nc.get(getMyComments);
