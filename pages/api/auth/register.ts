import { withSession } from "../../../utils";
import axios from "axios";

export default withSession(async (req, res) => {
  const url = `${process.env.CODETREE_API}/auth/register`;

  try {
    const data = await axios.post(url, req.body);
    res.json(data.data);
  } catch (error) {
    res.json(error.response.data);
  }
});
