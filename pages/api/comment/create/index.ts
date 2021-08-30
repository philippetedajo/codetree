import nc from "../../../../api-utils/nc";
import { createComment } from "../../../../api-utils/controllers/comment";

// ======================== POST /api/comment/create ========================
export default nc.post(createComment);
