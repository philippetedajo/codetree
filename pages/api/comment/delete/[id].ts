import nc from "../../../../api-utils/nc";
import { deleteComment } from "../../../../api-utils/controllers/comment";

// ======================== GET /api/comment/delete/:id ========================
export default nc.delete(deleteComment);
