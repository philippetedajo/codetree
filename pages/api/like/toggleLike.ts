import nc from "../../../api-utils/nc";
import { toggleLike } from "../../../api-utils/controllers/like";

// ======================== POST /api/like/toggleLike ========================
export default nc.post(toggleLike);
