import { withSession } from "../../../utils";
import axios from "axios";

export default withSession(async (req, res) => {
  const url = `${process.env.CODETREE_API}/auth/forgotPassword`;

  try {
    const result = await axios.post(url, req.body);
    res.json(result.data);
  } catch (error) {
    res.status(error.response.status);
    res.json(error.response.data.data);
  }
});
